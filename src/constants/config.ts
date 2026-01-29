type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Ujjwal Dhariwal",
    fullName: "Ujjwal Dhariwal",
    email: "ujjwaldhariwal0@gmail.com",
  },
  hero: {
    name: "Ujjwal Dhairwal",
    p: ["I architect high-performance UIs", "and scalable data engines."],
  },
  contact: {
    p: "Let's build something",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I am a Full Stack Engineer specializing in performance-driven UI 
      architecture and data visualization. With expertise in React, TypeScript, 
      and Node.js, I bridge the gap between complex backend logic and pixel-perfect, 
      accessible interfaces. I don't just build websites; I engineer interactive 
      systems that scale.`,
    },
    experience: {
      p: "My professional journey",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `The following projects demonstrate my ability to merge complex data 
      with intuitive design. Each project highlights specific skills—from optimizing 
      React performance and visualizing thousands of data points to architecting 
      secure Node.js backends. Links to code repositories and live demos are included.`,
    },
  },
};