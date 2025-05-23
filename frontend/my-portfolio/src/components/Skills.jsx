  import React, { useEffect, useState } from "react";
  import { motion, useAnimation } from "framer-motion";
  // import axios from "axios";
  import instance from "../api/axiosConfig";

  // SkillTag component remains unchanged, as no animation removal was requested for it.
 const SkillTag = ({ skillName }) => (
  <div
    className="
      bg-gray-700 text-gray-200 px-4 py-1 rounded-full text-sm font-medium
      transition-all duration-300 hover:bg-gray-600 hover:shadow-lg
      shadow border border-gray-600
      flex items-center justify-center
    "
    style={{
      minWidth: "80px",
      textAlign: "center",
      fontWeight: 500,
      letterSpacing: "0.03em",
    }}
  >
    {skillName}
  </div>
);


  // Heading variant remains, as only paragraph and categories animations were to be removed.
  const headingVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  // Paragraph and category variants are removed as per the request.

  const App = () => {
    const [groupedSkills, setGroupedSkills] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Animation controls for the heading only
    const headingControls = useAnimation();

    useEffect(() => {
      const fetchSkills = async () => {
        try {
          // Fetching from backend API as requested
          const response = await instance.get("/api/skills");

          // Group skills by category
          const skillsByCategory = response.data.reduce((acc, skill) => {
            const category = skill.category || "Other";
            if (!acc[category]) acc[category] = [];
            acc[category].push(skill);
            return acc;
          }, {});

          setGroupedSkills(skillsByCategory);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching skills:", err);
          setError("Failed to load skills. Please try again later.");
          setLoading(false);
        }
      };

      fetchSkills();
    }, []);

    // Trigger heading animation once after component mounts
    useEffect(() => {
      headingControls.start("visible");
    }, [headingControls]);

    return (
      <section id="skills" className="py-20 bg-black text-gray-200 font-inter">
        <div className="container px-6 text-left md:px-20 max-w-6xl relative z-10">
          {/* Main Heading (still animated) */}
          <motion.h2
            initial={{ opacity: 0, x: -100 }} // Start further left
            whileInView={{ opacity: 1, x: 0 }} // Animate to its position when in view
            transition={{ duration: 1, ease: "easeOut" }} // Added easeOut effect
            viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% in view
            // Adjusted text styling, alignment, and added sticky positioning
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-left mb-10 leading-tight
                      sticky  bg-black py-4 " // Made sticky, top-0, higher z-index, and added background/padding for readability
          >
            <span className="text-white">TECHNICAL</span> <br /> {/* White text for "TECHNICAL" */}
            <span className="text-gray-400">SKILLS</span> {/* Gray-400 text for "SKILLS" */}
          </motion.h2>

          {/* Descriptive Paragraph (animation removed) */}
          <p className="text-lg md:text-xl text-gray-400 mb-16 max-w-8xl mx-auto">
            My technical expertise spans across multiple domains of software development, from frontend and backend technologies to DevOps and cloud solutions.
          </p>

          {/* Loading, Error, or Skills Display */}
          {loading ? (
            <p className="text-center text-gray-400">Loading skills...</p>
          ) : error ? (
            <p className="text-center text-red-500 mb-6">{error}</p>
          ) : (
            <div>
              {/* Categories Heading */}
              {/* <h2 className="text-4xl font-bold text-indigo-400 mb-8 text-center">
                Categories
              </h2> */}

              {/* Categories Container (animation removed, now sticky) */}
              {/* Added sticky top-0 and z-20 to ensure it stays above other content when scrolling */}
              <div className="space-y-12 sticky top-0 z-20 bg-black pt-4 pb-4 -mt-4"> {/* Added padding and negative margin to account for sticky bar */}
                {Object.keys(groupedSkills).map((category) => (
                  // Individual category container (animation removed)
   <div
  key={category}
  className="
    bg-gray-900/90 p-8 rounded-2xl shadow-xl card-shine transition-shadow duration-400
    max-w-5xl mx-auto my-8 border border-gray-800
  "
>
  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 border-b border-gray-700 pb-3">
    {category}
  </h3>
  <div className="flex flex-wrap gap-4 justify-center">
    {groupedSkills[category].map((skill) => (
      <SkillTag key={skill._id} skillName={skill.name} />
    ))}
  </div>
</div>


                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  export default App;
