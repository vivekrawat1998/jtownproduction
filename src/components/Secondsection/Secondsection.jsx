import React from "react";
import Button from "../ui/Button";

const gstPercentage = 18;

const Secondsection = () => {
  const plans = [
    {
      id: 1,
      title: "Website Starter Plan",
      basePrice: 19999,
      features: [
        "✅ Comprehensive Website Marketing",
        "✅ Admin Panel Access",
        "✅ Custom Design & Development",
        "✅ Responsive Design",
        "✅ Fast Loading Speed",
        "✅ 1 Month Campaign Management",
        "✅ Basic SEO Optimization",
        "✅ 1 year Hosting",
        "✅ Ideal for small businesses and startups",
      ],
      technologies: ["Reactjs", "Node.js", "express.js", "Tailwind CSS", "Basic SEO Tools"],
      gradient: "bg-gradient-to-r from-blue-500/30 to-blue-700/80",
    },
    {
      id: 2,
      title: "Influencer Growth Plan",
      basePrice: 39999,
      features: [
        "✅ Everything in Digital Starter Plan",
        "✅ Influencer Profile Management",
        "✅ Content Creation & Scheduling",
        "✅ Brand Collaboration Assistance",
        "✅ Social Media Growth Strategy",
        "✅ Advanced SEO & Analytics",
        "✅ Dedicated Account Manager",
        "✅ Perfect for influencers and personal brands",
        "✅ 3 Months Campaign Management",
        "✅ Model Shoot (10 Edited Photos)",
        "✅ 30 days Reels/Shorts Creation (30 Reels/Shorts)",
        "✅ 2 collab one account (brand)",
      ],
      gradient: "bg-gradient-to-r from-purple-500/10 to-purple-700/80",
    },
    {
      id: 3,
      title: "Website Marketing Pro Plan",
      basePrice: 50000,
      features: [
        "✅ Custom SEO Strategy",
        "✅ AI-Powered Personalization & Smart UX Interactions",
        "✅ Admin Panel Access with Role-Based Permissions",
        "✅ Advanced Analytics & Real-Time Reporting (Google Analytics 4 )",
        "✅ Landing Page & Funnel Optimization with A/B Testing",
        "✅ E-commerce Features Setup with Secure Payment Gateway Integration",
        "✅ AI Chatbot & 24/7 Live Chat Support",
        "✅ Accessibility, Compliance & GDPR Data Privacy",
        "✅ Continuous Performance & Security Audits",
        "✅ Personalized Product & Content Recommendations",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "Google Ads API",
        "Advanced SEO Tools",
        "AI & Machine Learning APIs",
        "PWA Technologies",
        "Stripe/PayPal/Razorpay payment gateways",
      ],
      gradient: "bg-gradient-to-r from-yellow-500/40 to-orange-600/80",
    },
    {
      id: 4,
      title: "Music Video Production Plan",
      basePrice: 19999,
      features: [
        "✅ Full Music Video Production",
        "✅ Concept Development & Storyboarding",
        "✅ Professional Videography & Editing",
        "✅ Custom Visual Effects & Animation",
        "✅ Direction & Production Management",
        "✅ Location Scouting & Set Design",
        "✅ Artist Branding & Styling",
        "✅ Social Media Optimized Video Formats",
        "✅ Client Revisions & Final Delivery",
        "✅ Ideal for musicians and artists promoting new releases",
      ],
      technologies: ["Professional Camera Equipment", "Adobe Premiere Pro", "After Effects", "Color Grading", "Animation Software"],
      gradient: "bg-gradient-to-r from-green-400/30 to-green-700/80",
    },
  ];

  return (
    <div className="w-full relative px-5 py-20 font-space md:px-5 lg:px-10 md:py-32 bg-[#000000]">
      <img
        src="/assets/background_01_home_02.jpg"
        alt=""
        className="w-full h-full object-cover rounded-tr-[250px] rounded-bl-[250px] absolute z-10 top-0 left-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-8xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <h1 className="text-white font-space text-center md:text-left text-2xl md:text-4xl">
            Choose the Perfect Plan for Your NGO Website
          </h1>
          <div className="grid md:place-items-end place-items-center w-full">
            <Button width="clamp(270px, 40vw, 400px)" />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8 mt-12">
          {plans.map((plan) => {
            return (
              <div
                key={plan.id}
                className={`${plan.gradient} backdrop-blur-3xl shadow-xl border border-gray-200 group cursor-pointer rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl p-8 text-center relative`}
              >
                <h3 className="text-3xl font-extrabold text-white relative z-10">{plan.title}</h3>
                {/* <p className="text-2xl font-bold text-white mt-2 relative z-10">
                  ₹{plan.basePrice.toLocaleString()}
                </p> */}

                <div className="mt-6 text-left space-y-2 relative z-10">
                  {plan.features.map((feature, index) => (
                    <p key={index} className="text-lg text-white">
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="w-full mt-10 grid place-items-center">
                  <Button text={"Get started"} width="clamp(100px, 20vw, 500px)" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Secondsection;
