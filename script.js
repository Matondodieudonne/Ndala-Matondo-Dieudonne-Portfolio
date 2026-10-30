const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const year = document.getElementById('year');
const contactForm = document.getElementById('contact-form');

const translations = {
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.skills': 'Compétences',
    'nav.projects': 'Projets',
    'nav.experience': 'Expérience',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Portfolio professionnel',
    'hero.title': 'Je crée des solutions numériques',
    'hero.subtitle': 'modernes, claires et utiles.',
    'hero.lead': 'Bonjour, je suis Ndala Matondo Dieudonne, passionné par l’informatique, le développement web et la gestion de projets. Je conçois des expériences numériques solides et professionnelles, avec une attention particulière à la qualité, au design et à la valeur ajoutée pour les utilisateurs.',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',
    'hero.stat1': 'ans d’expérience',
    'hero.stat2': 'projets réalisés',
    'hero.stat3': 'engagement',
    'hero.card.tag': 'Développeur / IT / Gestion',
    'hero.card.text': 'Je mets les technologies au service des idées et des besoins des entreprises.',
    'hero.card.availability_label': 'Disponibilité',
    'hero.card.availability_value': 'Ouvert aux missions',
    'hero.card.specialty_label': 'Spécialité',
    'hero.card.specialty_value': 'Web & Digital',
    'hero.card.location_label': 'Localisation',
    'hero.card.location_value': 'RDC / Japon',
    'about.eyebrow': 'À propos',
    'about.title': 'Une approche technique, créative et orientée résultat.',
    'about.p1': 'Je suis un professionnel de l’informatique avec une forte appétence pour le développement web, la gestion de projets et la mise en place de solutions numériques utiles au quotidien.',
    'about.p2': 'Mon parcours m’a permis de développer des compétences dans la programmation, la gestion informatique et l’accompagnement des utilisateurs, tout en élargissant mes connaissances en design web, HTML, CSS et JavaScript.',
    'about.p3': 'Aujourd’hui, je cherche à évoluer dans des missions où je peux utiliser mes compétences pour créer des projets concrets, performants et adaptés aux besoins de mes clients.',
    'about.card1.title': 'Formation',
    'about.card1.year': '2022 - 2023',
    'about.card1.degree': 'Graduat en programmation informatique',
    'about.card1.school': 'En institut Superieur de Commerce de Kinshasa (ISC/Gombe)',
    'about.card2.title': 'Expérience',
    'about.card2.year': '2014 - 2020',
    'about.card2.text': 'Gestion informatique, assistance, projet digital, Enseignant Informatique',
    'about.card2.place': 'Au Centre professionnel de Formation OPOSSUM Kinshasa/Lemba',
    'about.card3.title': 'Vision',
    'about.card3.text': 'Développement professionnel et international',
    'skills.eyebrow': 'Compétences',
    'skills.title': 'Des compétences variées, pensées pour le numérique.',
    'skills.card1.title': 'Développement web',
    'skills.card1.text': 'Création de sites web modernes, structurés et adaptés aux besoins.',
    'skills.card2.title': 'Gestion informatique',
    'skills.card2.text': 'Organisation des outils, maintenance et support technique.',
    'skills.card3.title': 'Gestion de projets',
    'skills.card3.text': 'Planification, coordination, suivi des missions et objectifs.',
    'skills.card4.title': 'Présence digitale',
    'skills.card4.text': 'Mise en ligne, visibilité et amélioration de la présence numérique.',
    'projects.eyebrow': 'Projets',
    'projects.title': 'Quelques réalisations qui reflètent mon travail.',
    'experience.eyebrow': 'Parcours',
    'experience.title': 'Formation et expériences qui ont façonné mon profil.',
    'experience.item1.date': '2014 – 2021',
    'experience.item1.title': 'Gérant principal – Opossum Center',
    'experience.item1.text': 'Gestion informatique, accompagnement des utilisateurs et activité liée à la programmation.',
    'experience.item2.date': 'Formation supérieure',
    'experience.item2.title': 'Graduat en programmation informatique',
    'experience.item2.text': 'Institut Supérieur de Commerce, Kinshasa, République démocratique du Congo.',
    'experience.item3.date': 'Aujourd’hui',
    'experience.item3.title': 'Développement web et gestion de projets',
    'experience.item3.text': 'Approfondissement des compétences en design, développement et solutions numériques.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Discutons de ton prochain projet.',
    'contact.text': 'Je suis disponible pour des missions en développement web, gestion de projets numériques ou accompagnement digital.',
    'form.name_label': 'Nom',
    'form.name_placeholder': 'Votre nom',
    'form.email_label': 'Email',
    'form.email_placeholder': 'Votre email',
    'form.message_label': 'Message',
    'form.message_placeholder': 'Décrivez votre projet',
    'form.submit': 'Envoyer',
    'footer.rights': 'Tous droits réservés.',
    'footer.back': 'Retour en haut'
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Experience',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Professional portfolio',
    'hero.title': 'I build modern digital solutions',
    'hero.subtitle': 'clear, useful and contemporary.',
    'hero.lead': 'Hello, I am Ndala Matondo Dieudonne, passionate about information technology, web development and project management. I design solid and professional digital experiences with strong attention to quality, design and user value.',
    'hero.cta.projects': 'View my projects',
    'hero.cta.contact': 'Contact me',
    'hero.stat1': 'years of experience',
    'hero.stat2': 'projects completed',
    'hero.stat3': 'commitment',
    'hero.card.tag': 'Developer / IT / Management',
    'hero.card.text': 'I put technology at the service of ideas and business needs.',
    'hero.card.availability_label': 'Availability',
    'hero.card.availability_value': 'Open to missions',
    'hero.card.specialty_label': 'Specialty',
    'hero.card.specialty_value': 'Web & Digital',
    'hero.card.location_label': 'Location',
    'hero.card.location_value': 'DRC / Japan',
    'about.eyebrow': 'About',
    'about.title': 'A technical, creative and results-driven approach.',
    'about.p1': 'I am an IT professional with a strong interest in web development, project management and the implementation of digital solutions that are useful in everyday life.',
    'about.p2': 'My background has helped me develop skills in programming, IT management and user support, while expanding my knowledge in web design, HTML, CSS and JavaScript.',
    'about.p3': 'Today, I am looking to grow in missions where I can use my skills to create concrete, efficient projects tailored to client needs.',
    'about.card1.title': 'Education',
    'about.card1.year': '2022 - 2023',
    'about.card1.degree': 'Graduate in computer programming',
    'about.card1.school': 'At the Higher Institute of Commerce in Kinshasa (ISC/Gombe)',
    'about.card2.title': 'Experience',
    'about.card2.year': '2014 - 2020',
    'about.card2.text': 'IT management, support, digital projects, computer teacher',
    'about.card2.place': 'At the OPOSSUM Professional Training Center, Kinshasa/Lemba',
    'about.card3.title': 'Vision',
    'about.card3.text': 'Professional and international development',
    'skills.eyebrow': 'Skills',
    'skills.title': 'A diverse set of skills designed for the digital world.',
    'skills.card1.title': 'Web Development',
    'skills.card1.text': 'Creation of modern, structured and tailored websites.',
    'skills.card2.title': 'IT Management',
    'skills.card2.text': 'Tool organization, maintenance and technical support.',
    'skills.card3.title': 'Project Management',
    'skills.card3.text': 'Planning, coordination, monitoring of missions and objectives.',
    'skills.card4.title': 'Digital Presence',
    'skills.card4.text': 'Publishing, visibility and improvement of the digital presence.',
    'projects.eyebrow': 'Projects',
    'projects.title': 'A few achievements that reflect my work.',
    'experience.eyebrow': 'Journey',
    'experience.title': 'The training and experiences that shaped my profile.',
    'experience.item1.date': '2014 – 2021',
    'experience.item1.title': 'Senior Manager – Opossum Center',
    'experience.item1.text': 'IT management, user support and programming-related activities.',
    'experience.item2.date': 'Higher education',
    'experience.item2.title': 'Graduate in computer programming',
    'experience.item2.text': 'Higher Institute of Commerce, Kinshasa, Democratic Republic of Congo.',
    'experience.item3.date': 'Today',
    'experience.item3.title': 'Web development and project management',
    'experience.item3.text': 'Deepening skills in design, development and digital solutions.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s discuss your next project.',
    'contact.text': 'I am available for web development, digital project management and digital support missions.',
    'form.name_label': 'Name',
    'form.name_placeholder': 'Your name',
    'form.email_label': 'Email',
    'form.email_placeholder': 'Your email',
    'form.message_label': 'Message',
    'form.message_placeholder': 'Describe your project',
    'form.submit': 'Send',
    'footer.rights': 'All rights reserved.',
    'footer.back': 'Back to top'
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '私について',
    'nav.skills': 'スキル',
    'nav.projects': 'プロジェクト',
    'nav.experience': '経歴',
    'nav.contact': '連絡先',
    'hero.eyebrow': 'プロフェッショナル・ポートフォリオ',
    'hero.title': '現代的で使いやすい',
    'hero.subtitle': 'デジタルソリューションを作ります。',
    'hero.lead': 'こんにちは。私はNdala Matondo Dieudonneです。情報技術、Web開発、プロジェクト管理に情熱を持っています。品質、デザイン、ユーザー価値に重点を置き、信頼できるプロフェッショナルなデジタル体験を設計します。',
    'hero.cta.projects': 'プロジェクトを見る',
    'hero.cta.contact': 'お問い合わせ',
    'hero.stat1': '経験年数',
    'hero.stat2': '完了したプロジェクト',
    'hero.stat3': '熱意',
    'hero.card.tag': '開発者 / IT / 管理',
    'hero.card.text': '技術をアイデアと企業のニーズに合わせて活用します。',
    'hero.card.availability_label': '可用状況',
    'hero.card.availability_value': '案件受付中',
    'hero.card.specialty_label': '専門分野',
    'hero.card.specialty_value': 'Web & Digital',
    'hero.card.location_label': '所在地',
    'hero.card.location_value': 'コンゴ共和国 / 日本',
    'about.eyebrow': '私について',
    'about.title': '技術性、創造性、結果重視のアプローチ。',
    'about.p1': '私はWeb開発、プロジェクト管理、日常的に役立つデジタルソリューションの実装に強い興味を持つITの専門家です。',
    'about.p2': '私の経験を通じて、プログラミング、IT管理、ユーザーサポートのスキルを身につけると同時に、Webデザイン、HTML、CSS、JavaScriptの知識も広げてきました。',
    'about.p3': '現在、私はお客様のニーズに合わせた具体的で効果的なプロジェクトを生み出せる場で、スキルを活かして成長したいと考えています。',
    'about.card1.title': '学歴',
    'about.card1.year': '2022 - 2023',
    'about.card1.degree': 'コンピュータプログラミング卒業',
    'about.card1.school': 'Kinshasaの商業高等学院（ISC/Gombe）',
    'about.card2.title': '経験',
    'about.card2.year': '2014 - 2020',
    'about.card2.text': 'IT管理、サポート、デジタルプロジェクト、コンピュータ教員',
    'about.card2.place': 'Kinshasa/LembaのOPOSSUM職業訓練センター',
    'about.card3.title': 'ビジョン',
    'about.card3.text': '専門的かつ国際的な成長',
    'skills.eyebrow': 'スキル',
    'skills.title': 'デジタル分野に合わせた多様なスキル。',
    'skills.card1.title': 'Web開発',
    'skills.card1.text': '現代的で構造化されたニーズに合うサイトの制作。',
    'skills.card2.title': 'IT管理',
    'skills.card2.text': 'ツールの整理、メンテナンス、技術サポート。',
    'skills.card3.title': 'プロジェクト管理',
    'skills.card3.text': '計画、調整、ミッションと目標の追跡。',
    'skills.card4.title': 'デジタルプレゼンス',
    'skills.card4.text': '公開、可視性の向上とデジタル対応の改善。',
    'projects.eyebrow': 'プロジェクト',
    'projects.title': '私の仕事を表すいくつかの実績。',
    'experience.eyebrow': '経歴',
    'experience.title': '私のプロフィールを形づくった学びと経験。',
    'experience.item1.date': '2014 – 2021',
    'experience.item1.title': '主任マネージャー – Opossum Center',
    'experience.item1.text': 'IT管理、ユーザーサポート、プログラミング関連業務。',
    'experience.item2.date': '高等教育',
    'experience.item2.title': 'コンピュータプログラミング卒業',
    'experience.item2.text': 'Kinshasa商業高等学院、コンゴ民主共和国。',
    'experience.item3.date': '現在',
    'experience.item3.title': 'Web開発とプロジェクト管理',
    'experience.item3.text': 'デザイン、開発、デジタルソリューションのスキルを深めています。',
    'contact.eyebrow': '連絡先',
    'contact.title': '次のプロジェクトについて話しましょう。',
    'contact.text': 'Web開発、デジタルプロジェクト管理、デジタル支援の業務に対応可能です。',
    'form.name_label': '名前',
    'form.name_placeholder': 'お名前',
    'form.email_label': 'メール',
    'form.email_placeholder': 'メールアドレス',
    'form.message_label': 'メッセージ',
    'form.message_placeholder': 'プロジェクト内容を教えてください',
    'form.submit': '送信',
    'footer.rights': 'All rights reserved.',
    'footer.back': 'トップへ戻る'
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.skills': '技能',
    'nav.projects': '项目',
    'nav.experience': '经历',
    'nav.contact': '联系',
    'hero.eyebrow': '专业作品集',
    'hero.title': '我创造现代化、实用且清晰的',
    'hero.subtitle': '数字解决方案。',
    'hero.lead': '您好，我是Ndala Matondo Dieudonne，热爱信息技术、网页开发和项目管理。我设计稳固且专业的数字体验，始终重视质量、设计和用户价值。',
    'hero.cta.projects': '查看项目',
    'hero.cta.contact': '联系我',
    'hero.stat1': '工作经验',
    'hero.stat2': '已完成项目',
    'hero.stat3': '责任心',
    'hero.card.tag': '开发者 / IT / 管理',
    'hero.card.text': '我让技术服务于创意和企业需求。',
    'hero.card.availability_label': '可用性',
    'hero.card.availability_value': '接受项目',
    'hero.card.specialty_label': '专业领域',
    'hero.card.specialty_value': 'Web & Digital',
    'hero.card.location_label': '所在地',
    'hero.card.location_value': '刚果 / 日本',
    'about.eyebrow': '关于',
    'about.title': '技术性、创造性和结果导向的方法。',
    'about.p1': '我是一名IT专业人士，热衷于网页开发、项目管理以及为日常生活提供实用数字解决方案的实施。',
    'about.p2': '我的经历帮助我发展了编程、IT管理和用户支持技能，同时也扩展了我在网页设计、HTML、CSS和JavaScript方面的知识。',
    'about.p3': '今天，我希望参与能够发挥我技能并为客户创造切实有效项目的工作机会。',
    'about.card1.title': '教育',
    'about.card1.year': '2022 - 2023',
    'about.card1.degree': '计算机编程毕业',
    'about.card1.school': '金沙萨商业高等学院（ISC/Gombe）',
    'about.card2.title': '经验',
    'about.card2.year': '2014 - 2020',
    'about.card2.text': 'IT管理、支持、数字项目、计算机教师',
    'about.card2.place': '金沙萨/勒姆巴的OPOSSUM职业培训中心',
    'about.card3.title': '愿景',
    'about.card3.text': '职业与国际发展',
    'skills.eyebrow': '技能',
    'skills.title': '一组适合数字世界的多样化技能。',
    'skills.card1.title': '网页开发',
    'skills.card1.text': '创建现代、结构化且符合需求的网站。',
    'skills.card2.title': 'IT管理',
    'skills.card2.text': '工具组织、维护和技术支持。',
    'skills.card3.title': '项目管理',
    'skills.card3.text': '规划、协调和任务目标跟踪。',
    'skills.card4.title': '数字存在',
    'skills.card4.text': '上线、可见性提升和数字形象优化。',
    'projects.eyebrow': '项目',
    'projects.title': '一些体现我工作成果的案例。',
    'experience.eyebrow': '经历',
    'experience.title': '塑造我个人档案的学习和经验。',
    'experience.item1.date': '2014 – 2021',
    'experience.item1.title': '高级经理 – Opossum Center',
    'experience.item1.text': 'IT管理、用户支持以及与编程相关的活动。',
    'experience.item2.date': '高等教育',
    'experience.item2.title': '计算机编程毕业',
    'experience.item2.text': '金沙萨商业高等学院，刚果民主共和国。',
    'experience.item3.date': '今天',
    'experience.item3.title': '网页开发与项目管理',
    'experience.item3.text': '不断提升设计、开发和数字解决方案的能力。',
    'contact.eyebrow': '联系',
    'contact.title': '让我们讨论下一个项目。',
    'contact.text': '我可以接受网页开发、数字项目管理和数字支持相关工作。',
    'form.name_label': '姓名',
    'form.name_placeholder': '你的名字',
    'form.email_label': '电子邮件',
    'form.email_placeholder': '你的邮箱',
    'form.message_label': '消息',
    'form.message_placeholder': '描述你的项目',
    'form.submit': '发送',
    'footer.rights': '保留所有权利。',
    'footer.back': '返回顶部'
  }
};

const langButtons = document.querySelectorAll('.lang-btn');

function applyLanguage(language) {
  const dict = translations[language] || translations.fr;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dict[key]) {
      element.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dict[key]) {
      element.setAttribute('placeholder', dict[key]);
    }
  });

  document.documentElement.lang = language === 'en' ? 'en' : language === 'ja' ? 'ja' : language === 'zh' ? 'zh' : 'fr';

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  const navLinks = navMenu.querySelectorAll('a');

  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((item) => item.classList.remove('active'));
      link.classList.add('active');
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  const sections = [...document.querySelectorAll('main section[id]')];

  const setActiveLink = () => {
    const scrollPosition = window.scrollY + 180;

    let activeId = 'home';

    sections.forEach((section) => {
      if (scrollPosition >= section.offsetTop) {
        activeId = section.id;
      }
    });

    navLinks.forEach((link) => {
      const isActive = link.getAttribute('href') === '#' + activeId;
      link.classList.toggle('active', isActive);
    });
  };

  window.addEventListener('scroll', setActiveLink, { passive: true });
  setActiveLink();
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

applyLanguage('fr');

if (contactForm) {
  contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = contactForm.querySelector('button');
    const originalText = button.textContent;
    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    button.textContent = 'Envoi...';
    button.disabled = true;

    try {
      const response = await fetch('https://formsubmit.co/ajax/dieudomatondo50@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          _captcha: 'false',
          _subject: 'Nouveau message depuis le portfolio',
          _template: 'table'
        })
      });

      if (!response.ok) {
        throw new Error('Erreur réseau');
      }

      button.textContent = 'Message envoyé';
      contactForm.reset();
    } catch (error) {
      button.textContent = 'Échec de l\'envoi';
      console.error('Form submission failed:', error);
    } finally {
      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
      }, 2200);
    }
  });
}
