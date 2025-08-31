import { motion } from "framer-motion";
import heroImage from "../assets/images/about_hero.jpg";
import team1 from "../assets/images/team1.jpg";
import team2 from "../assets/images/team2.jpg";
import team3 from "../assets/images/team3.jpg";
import { Link } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const team = [
  { img: team1, role: "Stock Manager" },
  { img: team2, role: "Marketing Manager" },
  { img: team3, role: "Customer Support Manager" },
];

const AboutUs = () => {
  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <img
          src={heroImage}
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center py-28 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4"
          >
            About <span className="text-yellow-400">Our Store</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200"
          >
            We are passionate about delivering high-quality products and
            exceptional shopping experiences to our customers.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Our Mission
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Our mission is to provide top-quality products with a seamless
          shopping experience. We believe in innovation, customer satisfaction,
          and creating value for every purchase. Every product in our store is
          carefully selected to ensure it meets the highest standards of
          quality.
        </motion.p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-10"
          >
            Why Shop With Us?
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                desc: "We source only the best products to ensure quality you can trust.",
              },
              {
                title: "Fast Delivery",
                desc: "Get your products delivered quickly and safely to your doorstep.",
              },
              {
                title: "24/7 Support",
                desc: "Our dedicated support team is always here to help you.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <img
                src={member.img}
                alt="Team Member"
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Member {index + 1}</h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="bg-gray-900 text-white py-16 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Join Our Shopping Community
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Be the first to know about new arrivals, exclusive offers, and the
          latest trends in online shopping.
        </p>
        <Link to={'/'} className="bg-yellow-400 text-black font-medium px-8 py-3 rounded-full hover:bg-yellow-300 transition">
          Start Shopping
        </Link>
      </motion.section>
    </div>
  );
};

export default AboutUs;
