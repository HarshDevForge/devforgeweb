import React from 'react';
import Card from 'react-bootstrap/Card';
import image1 from '../assets/CMS.jpeg';
import image2 from '../assets/JSTS.jpeg';
import image3 from '../assets/Next.avif';
import '../Style/Blog.css';

const BlogCard = ({ titles, texts, imageSrc, topic, readTime }) => (
  <Card className="blog-card">
    <Card.Img variant="top2" src={imageSrc} />
    <Card.Body>
      <Card.Title className="blog-titles">{titles}</Card.Title>
      <Card.Text className="blog-texts">{texts}</Card.Text>
    </Card.Body>
    <div className="blog-info">
      <div className="blog-topic">{topic}</div>
      <div className="vertical-line"></div>
      <div className="read-time">{readTime}</div>
    </div>
  </Card>
);

function Blog() {
  return (
    <section style={{ backgroundColor: '#f1f1f1' }}>
      <div className="container">
        <h1 className='text-center text-3xl mb-4'>Latest Blog</h1>
        <div className="row">
          <div className="col-md-4 mb-4">
            <BlogCard 
              titles="Unlocking Web Efficiency: The Power of CMS for Modern Applications"
              texts="Content Management Systems (CMS) revolutionize web development by simplifying content updates, enhancing collaboration, reducing costs, and improving scalability. Popular platforms like WordPress, Joomla, and Drupal empower businesses to create dynamic, user-friendly websites efficiently, driving"
              imageSrc={image1}
              topic="CMS"
              readTime="4 min read"
            />
          </div>
          <div className="col-md-4 mb-4">
            <BlogCard 
              titles="TypeScript: The Modern Developer’s Secret Weapon"
              texts="TypeScript, a statically-typed JavaScript superset introduced by Microsoft in 2012, enhances productivity, code quality, and scalability. It catches errors early and provides advanced tools, making it ideal for large projects. Despite a learning curve, its benefits.JavaScript, despite being the cornerstone of web"
              imageSrc={image2}
              topic="JS"
              readTime="3 min read"
            />
          </div>
          <div className="col-md-4 mb-4">
            <BlogCard 
              titles="Unveiling the Magic of getServerSideProps in Next.js: A Beautiful Dive into Dynamic Server-Side Rendering"
              texts="Exploring Next.js: Unravel the Power of getServerSideProps. Discover how this key function enhances server-side rendering, optimizes performance, and elevates your Next.js applications to new heights."
              imageSrc={image3}
              topic="Next.js"
              readTime="3 min read"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
