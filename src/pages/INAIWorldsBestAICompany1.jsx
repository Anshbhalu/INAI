import React, { useState } from 'react';
import './INAIWorldsBestAICompany.css';

const INAIWorldsBestAICompany = () => {
  const [activeTab, setActiveTab] = useState('capabilities');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      {/* Hero Section with Banner Image OUTSIDE the container */}
      <div className="inaiwbc1-container">
        <section className="inaiwbc1-hero-section">
          <div className="inaiwbc1-hero-overlay" />
          <div className="inaiwbc1-hero-content">
            <h1>INAI Worlds: Best AI Company in India</h1>
            <p className="inaiwbc1-hero-subtitle">Building the future with ethical, scalable AI solutions</p>
            <p className="inaiwbc1-intro">
              As a leading AI company in India, INAI Worlds is not a service outsourcing firm. We design and build proprietary AI modules that are efficient, scalable, and built for real-world applications. Whether you're a startup or a tech enterprise, we offer intelligent solutions backed by research and technology leadership.
            </p>
            <div className="inaiwbc1-hero-buttons">
              <button className="inaiwbc1-cta-btn inaiwbc1-primary">Explore Solutions</button>
              <button className="inaiwbc1-cta-btn inaiwbc1-secondary">Contact Us</button>
            </div>
          </div>
        </section>
      </div>
      <div className="inaiwbc1-container">
        {/* Stats Section */}
        <section className="inaiwbc1-stats-section">
          <div className="inaiwbc1-stat-card">
            <div className="inaiwbc1-stat-value">1.2M+</div>
            <div className="inaiwbc1-stat-label">AI Professionals</div>
          </div>
          <div className="inaiwbc1-stat-card">
            <div className="inaiwbc1-stat-value">50-70%</div>
            <div className="inaiwbc1-stat-label">Cost Savings</div>
          </div>
          <div className="inaiwbc1-stat-card">
            <div className="inaiwbc1-stat-value">7</div>
            <div className="inaiwbc1-stat-label">Top 100 AI Startups</div>
          </div>
          <div className="inaiwbc1-stat-card">
            <div className="inaiwbc1-stat-value">45+</div>
            <div className="inaiwbc1-stat-label">Countries Served</div>
          </div>
        </section>
      </div>
      <div className="inaiwbc1-container">
        {/* Why India Section - Horizontal Cards */}
        <section>
          <div className="inaiwbc1-feature-section-half">
            <h2 className="inaiwbc1-section-title">Why India is the Best Place for AI/ML Development</h2>
            <div className="inaiwbc1-feature-grid">
              <div className="inaiwbc1-feature-card">
                <h3>Deep Talent Reservoir</h3>
                <p>India boasts a vast pool of highly skilled AI/ML engineers, data scientists, and tech innovators, making it a global hub for advanced technology solutions.</p>
              </div>
              <div className="inaiwbc1-feature-card">
                <h3>Affordable, High-Impact Development</h3>
                <p>Get world-class AI/ML solutions at a fraction of the cost, without compromising on quality or innovation.</p>
              </div>
              <div className="inaiwbc1-feature-card">
                <h3>Innovation-First Ecosystem</h3>
                <p>India’s thriving startup culture and government support foster rapid innovation and cutting-edge research in AI/ML.</p>
              </div>
              <div className="inaiwbc1-feature-card">
                <h3>Trusted by Global Enterprises</h3>
                <p>Leading companies worldwide trust Indian AI/ML teams for mission-critical projects and digital transformation.</p>
              </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '2rem'}}>
              <button className="inaiwbc1-cta-btn inaiwbc1-primary">Learn About Our Process</button>
            </div>
          </div>
        </section>
      </div>
      <div className="inaiwbc1-container">
        {/* Capabilities Section - Card Grid */}
        <section className="inaiwbc1-section-block">
          <div className="inaiwbc1-section-header">
            <h2 className="inaiwbc1-section-title">Our Core AI Development Capabilities</h2>
            <div className="inaiwbc1-tabs">
              <button 
                className={`inaiwbc1-tab-btn ${activeTab === 'capabilities' ? 'inaiwbc1-active' : ''}`}
                onClick={() => setActiveTab('capabilities')}
              >
                Capabilities
              </button>
              <button 
                className={`inaiwbc1-tab-btn ${activeTab === 'industries' ? 'inaiwbc1-active' : ''}`}
                onClick={() => setActiveTab('industries')}
              >
                Industries
              </button>
            </div>
          </div>

          {activeTab === 'capabilities' ? (
            <div className="inaiwbc1-card-grid">
              <div className="inaiwbc1-card">
                <h3>Generative AI Systems</h3>
                <p>Creating AI models that not only generate content but learn, adapt, and evolve. These systems power everything from intelligent assistants to data-driven decision tools.</p>
              </div>
              
              <div className="inaiwbc1-card">
                <h3>Natural Language Processing (NLP)</h3>
                <p>Our NLP modules help businesses understand, summarize, and respond to natural language — enabling smarter search, voice assistants, and chatbots.</p>
              </div>
              
              <div className="inaiwbc1-card">
                <h3>Predictive Analytics</h3>
                <p>We use structured and unstructured data to build models that can forecast demand, detect patterns, and assist in real-time business decisions.</p>
              </div>
              
              <div className="inaiwbc1-card">
                <h3>Computer Vision</h3>
                <p>Advanced image and video analysis for object detection, facial recognition, and automated quality control systems.</p>
              </div>
            </div>
          ) : (
            <div className="inaiwbc1-card-grid">
              <div className="inaiwbc1-industry-card">
                <div className="inaiwbc1-industry-icon">🎓</div>
                <h3>Education</h3>
                <p>Adaptive tutoring systems and auto-generated learning content</p>
              </div>
              
              <div className="inaiwbc1-industry-card">
                <div className="inaiwbc1-industry-icon">🏥</div>
                <h3>Healthcare</h3>
                <p>AI-powered diagnosis support and patient modeling</p>
              </div>
              
              <div className="inaiwbc1-industry-card">
                <div className="inaiwbc1-industry-icon">🛍️</div>
                <h3>Retail & E-commerce</h3>
                <p>Predictive inventory, buyer insights</p>
              </div>
              
              <div className="inaiwbc1-industry-card">
                <div className="inaiwbc1-industry-icon">🏢</div>
                <h3>Real Estate</h3>
                <p>Virtual AI agents and intelligent property matching</p>
              </div>
              
              <div className="inaiwbc1-industry-card">
                <div className="inaiwbc1-industry-icon">🎬</div>
                <h3>Media</h3>
                <p>Lip-sync AI, voice synthesis, CGI automation</p>
              </div>
            </div>
          )}
        </section>
      </div>
      <div className="inaiwbc1-container">
        {/* Products Section - Vertical Cards with Carousel */}
        <section className="inaiwbc1-section-block">
          <h2 className="inaiwbc1-section-title">Upcoming AI Products Built In-House</h2>
          <div className="inaiwbc1-products-carousel">
            <div className="inaiwbc1-product-card">
              <div className="inaiwbc1-product-header">
                <div className="inaiwbc1-product-icon">🧠</div>
                <h3>INAI Virtual Model</h3>
              </div>
              <p>A CGI-powered virtual assistant built using generative AI and machine learning pipelines.</p>
              <div className="inaiwbc1-product-status">In Development</div>
            </div>
            
            <div className="inaiwbc1-product-card">
              <div className="inaiwbc1-product-header">
                <div className="inaiwbc1-product-icon">🌐</div>
                <h3>Influwket</h3>
              </div>
              <p>A new-age AI-powered digital interaction platform for intelligent social communication.</p>
              <div className="inaiwbc1-product-status">Beta Testing</div>
            </div>
            
            <div className="inaiwbc1-product-card">
              <div className="inaiwbc1-product-header">
                <div className="inaiwbc1-product-icon">🏙️</div>
                <h3>Offiket</h3>
              </div>
              <p>An AI-led real estate platform that simplifies commercial property exchanges with automation and trust.</p>
              <div className="inaiwbc1-product-status">In Development</div>
            </div>
            
            <div className="inaiwbc1-product-card">
              <div className="inaiwbc1-product-header">
                <div className="inaiwbc1-product-icon">📹</div>
                <h3>Veedket</h3>
              </div>
              <p>A video-first knowledge and expression platform for creators, learners, and innovators.</p>
              <div className="inaiwbc1-product-status">Concept Stage</div>
            </div>
          </div>
          <p className="inaiwbc1-product-note">These products are part of our roadmap to becoming the best AI company in India, with each model built using real-time data, ethical AI, and scalable architecture.</p>
        </section>
      </div>
      <div className="inaiwbc1-container">
        {/* FAQ Section */}
        <section className="inaiwbc1-faq-section-bg">
          <div className="inaiwbc1-faq-section-content">
            <div className="inaiwbc1-faq-left">
              <h2 className="inaiwbc1-section-title">Frequently Asked Questions</h2>
              <p className="inaiwbc1-faq-description">Find answers to common questions about INAI Worlds, our AI products, and our approach to innovation.</p>
            </div>
            <div className="inaiwbc1-faq-right">
              <div className="inaiwbc1-faq-container">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div 
                    key={index} 
                    className={`inaiwbc1-faq-item ${expandedFaq === index ? 'inaiwbc1-expanded' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="inaiwbc1-faq-question">
                      <div className="inaiwbc1-faq-number">{index}.</div>
                      <div className="inaiwbc1-faq-text">Why is INAI Worlds considered one of the best AI companies in India?</div>
                      <div className="inaiwbc1-faq-toggle">{expandedFaq === index ? '-' : '+'}</div>
                    </div>
                    {expandedFaq === index && (
                      <div className="inaiwbc1-faq-answer">
                        <p>INAI Worlds is a product-first AI company based in India, building intelligent, in-house AI modules rather than offering generic development services. Our focus is on creating scalable, future-ready AI products that deliver long-term business value across industries like education, healthcare, and real estate.</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="inaiwbc1-container">
        {/* CTA Section */}
        <section className="inaiwbc1-cta-section">
          <h2>Ready to Transform Your Business with AI?</h2>
          <p>Join the revolution with India's leading AI innovation partner</p>
          <button className="inaiwbc1-cta-btn inaiwbc1-primary">Schedule a Consultation</button>
        </section>
      </div>
    </>
  );
};

export default INAIWorldsBestAICompany;