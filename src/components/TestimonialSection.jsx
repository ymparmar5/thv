"use client";
import React from "react";
import { motion } from "framer-motion";

// TestimonialsColumn component
const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div className="p-10 rounded-3xl border  border border-primary-900  shadow-lg shadow-primary/10 max-w-xs w-full" key={i}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

// Testimonials data (for Security Monitoring Service Provider)
const testimonials = [
  {
    text: "Our organization’s security operations have become far more efficient since implementing their monitoring solutions. Real-time alerts and AI-driven analytics keep us one step ahead of potential threats.",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sophia Martinez",
    role: "Chief Security Officer",
  },
  {
    text: "The monitoring dashboard is intuitive and reliable. We can easily track incidents and ensure rapid response, no matter where our teams are located.",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Liam O'Connor",
    role: "IT Infrastructure Manager",
  },
  {
    text: "Their 24/7 monitoring has given us complete peace of mind. The proactive threat detection has prevented multiple issues before they could escalate.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Amelia Chen",
    role: "Network Operations Lead",
  },
  {
    text: "From installation to ongoing monitoring, the experience has been seamless. The accuracy and speed of alerts are unmatched in the industry.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Ethan Walker",
    role: "Head of Security Operations",
  },
  {
    text: "We’ve significantly reduced downtime and security breaches thanks to their advanced monitoring systems. Truly a game-changer for our business continuity.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Nora Becker",
    role: "Operations Director",
  },
  {
    text: "Their global security coverage and analytics tools helped us unify monitoring across multiple regions, improving visibility and response time.",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
    name: "Isabella Rossi",
    role: "Global Security Coordinator",
  },
  {
    text: "Exceptional service with real-time updates and reliable insights. The integration with our existing systems was smooth and efficient.",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    name: "Oliver Nguyen",
    role: "Cybersecurity Consultant",
  },
  {
    text: "They provided a tailored monitoring solution that fits our global operations perfectly. The team’s professionalism and support are outstanding.",
    image: "https://randomuser.me/api/portraits/women/8.jpg",
    name: "Maya Johnson",
    role: "Risk Management Officer",
  },
  {
    text: "With their advanced monitoring suite, we’ve improved our compliance and threat response capabilities significantly across all branches.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Noah Andersen",
    role: "Compliance & Security Director",
  },
];


// Split testimonials into columns
const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Main Testimonials component
const TestimonialSection = () => {
  return (
    <section className="bg-background my-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What Our Clients Say
          </h2>
          <p className="text-center mt-5 opacity-75">
              Real feedback from organizations who trust THV Digital for their security needs.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;