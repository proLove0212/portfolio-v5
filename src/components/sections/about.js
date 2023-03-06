import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = ['React/Vue/Angular', "Android/iOS/React Native", 'Laravel', 'Django/Flask', 'WordPress', 'Shopify/EC-CUBE', 'C,Python,Perl,Ruby', 'HTML/CSS/Sass', 'Beautiful Soup'];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">紹介</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p style={{fontSize: 18}}>
                プログラミングの専門家であり、Web上で多くのプロジェクトを経験しています。デザインからコーディングまですべてをカバーするWeb開発者です。 IT業界に7年以上従事しており、Web、アプリケーション制作経験を保有しています。豊富な経験とアイデアでお客様に愛されています。

                使いやすく安定したシステムを、一般より安く提供しております。
                常にお客様に満足いただける品質をご提供いたします。また、納期にも関しても最善を尽くします。

                業務の価格や難易度が基本的な問題ではなく、顧客の最大の満足を醸し出し出せる見事結果が優先だと思いながら、すべての仕事を丁寧な姿勢で行っています。

                ページスピードや、SEOも考慮し、W3Cに準拠したコーディングを基本とし、メンテンスしやすく、効率的な丁寧できれいなコーディングをいたします。

                業界内でも高いレベルの実務経験と豊富な技術力を持つメンバーで構成された開発チームで一つ一つの案件を丁寧に対応しています。

                出会いを大切に、末永く皆様のお力になれるよう務めております。
            </p>

          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
