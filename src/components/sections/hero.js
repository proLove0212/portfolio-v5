import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1 style={{fontSize: 26, fontWeight: "bold"}}>晃 村山</h1>;
  const two = <h2 className="big-heading">あきら むらやま</h2>;
  const three = <p style={{fontWeight: "bold"}}><b>Webサイト制作, モバイルアプリ開発を精一杯お手伝いいたします。はやい！</b> <a>と驚かれます。</a> </p>;
  const four = (
    <>
      <p >
        ウェブサービスからサーバー構築まで柔軟にご対応します！
        WEBのフロントエンド、サーバ開発を得意としています。
        バックエンド、フロントエンド、インフラとフルスタックエンジニアとして活動しています。
        迅速・丁寧・安価に対応致します。
        レスポンシブのデザインとHTMLが大変得意です。
        ただ技術やソリューション提供をして終わるのではなく、ご期待された以上の結果が出せる様、注力して居ます。
      </p>
    </>
  );


  const five = (
    <a
      className="email-link"
      href="https://github.com/proLove0212"
      target="_blank"
      rel="noreferrer">
      作業力を確認してください。
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
