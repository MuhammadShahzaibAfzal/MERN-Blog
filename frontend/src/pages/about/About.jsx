import "./about.scss";

const About = () => {
  return (
    <div className="aboutWrapper">
      <div className="profileWrapper">
        <img src="./profile.jpeg" alt="profile image" />
      </div>
      <h2>Hello, I'm Muhammad Shahzaib Afzal, a MERN Stack Developer!</h2>
      <p>
        Greetings! I'm thrilled to welcome you to my corner of the internet. I'm
        Muhammad Shahzaib Afzal, a recent graduate in BS IT from the University
        of Gujrat, and I'm passionate about all things tech.
      </p>
      <h2>About Me</h2>
      <p>
        As a MERN (MongoDB, Express.js, React, Node.js) Stack Developer, I find
        joy in crafting robust and efficient web applications. My journey in the
        world of technology started at the university, where I honed my skills
        and discovered my love for coding.
      </p>
      <h2>Learning Every Day</h2>
      <p>
        This blog is my digital journal where I document my daily learning
        experiences. Whether it's a new JavaScript framework, a coding
        challenge, or a breakthrough in web development, I'm excited to share my
        insights with you. Join me on this journey as we explore the
        ever-evolving landscape of technology together.
      </p>
      <h2>Freelancing</h2>
      <p>
        {" "}
        In addition to my academic pursuits, I also dive into the world of
        freelancing. If you're looking for a dedicated developer to bring your
        projects to life, feel free to reach out. Collaboration is key, and I'm
        always open to new opportunities and challenges.
      </p>
      <h2>Skills Snapshot</h2>
      <ul>
        <li>HTML,CSS,Javascript</li>
        <li>React JS, React Native</li>
        <li>Node JS Express JS</li>
        <li>MongoDB</li>
        <li>Git, Docker</li>
        <li>Test Driven Development</li>
      </ul>
      <h2>Connect with Me</h2>
      <p>
        I value the connections I make in the tech community. Whether you're a
        fellow developer, a prospective client, or just someone who shares a
        love for coding, don't hesitate to reach out. Let's connect on this
        exciting journey!
      </p>
      <p>
        Thank you for visiting my blog. I hope you find inspiration and
        knowledge within these digital pages. Happy coding!{" "}
      </p>
      <p>Best regards,</p>
      <p className="name">Muhammad Shahzaib Afzal</p>
    </div>
  );
};

export default About;
