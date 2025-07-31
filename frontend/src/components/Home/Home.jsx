import React from "react";
import './Home.css';
import ChatBot from "../ChatBot/ChatBot";



const testimonials = [
    {
        name: "Aisha Sharma",
        text: "Shopsy App makes online shopping so much fun and easy! The interface is smooth and user-friendly.",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        name: "Rohit Verma",
        text: "I love how convenient it is to browse and discover new things on Shopsy. Highly recommended!",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        name: "Priya Singh",
        text: "The Shopsy App has become my go-to for all my shopping needs. Great experience every time!",
        image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
];

function Home() {
    function handleGetstarted(){
        alert("Login to get started")
    }
    return (
        <div className="home-root">
            {/* Hero Section */}
            <section className="home-hero-section">
                <img
                    src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1500&q=80"
                    alt="Shopsy App Banner"
                    className="home-image"
                />
                <div className="home-hero-content">
                    <h1 className="home-hero-title">Welcome to Shopsy App</h1>
                    <p className="home-hero-desc">
                        Experience seamless and enjoyable shopping with Shopsy App. Discover, connect, and enjoy a world of convenience at your fingertips.
                    </p>
                  <button onClick={handleGetstarted}  className="get-started-btn" >Get started</button>
                </div>
            </section>

            {/* Featured Section */}
            <section className="home-featured-section">
                <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                    alt="Shopsy Feature 1"
                    className="home-featured-image"
                />
                <img
                    src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                    alt="Shopsy Feature 2"
                    className="home-featured-image"
                />
                <img
                    src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80"
                    alt="Shopsy Feature 3"
                    className="home-featured-image"
                />
            </section>

            {/* Testimonials Section */}
            <section className="home-testimonials-section">
                <h2 className="home-testimonials-title">
                    What Our Users Say
                </h2>
                <div className="home-testimonials-list">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="home-testimonial-card">
                            <img
                                src={t.image}
                                alt={t.name}
                                className="home-testimonial-avatar"
                            />
                            <p className="home-testimonial-text">
                                "{t.text}"
                            </p>
                            <span className="home-testimonial-name">
                                {t.name}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <div>
                    <p>&copy; {new Date().getFullYear()} Shopsy App. All rights reserved.</p>
                    <p>
                        <a href="/about" className="home-footer-link">About</a>
                        <a href="/contact" className="home-footer-link">Contact</a>
                    </p>
                </div>
            </footer>
            <ChatBot/>
        </div>
    );
}

export default Home;