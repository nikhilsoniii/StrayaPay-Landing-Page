import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Solutions from "./components/Solutions";
// import Developers from "./components/Developers";
import QRPayment from "./components/QRPayment";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

function App() {
  const { darkMode, setDarkMode } = useTheme();
  const [isVisible, setIsVisible] = useState(true);
  const [userType, setUserType] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-[#f9fdfb] dark:bg-[#0a1a14]">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero isVisible={isVisible} />
          <Features isVisible={isVisible} />
          <Solutions isVisible={isVisible} />
          {/* <Developers isVisible={isVisible} /> */}
          <QRPayment isVisible={isVisible} />
          <Waitlist
            isVisible={isVisible}
            userType={userType}
            setUserType={setUserType}
            email={email}
            setEmail={setEmail}
            isSubmitting={isSubmitting}
            isSubmitted={isSubmitted}
            onSubmit={async (e) => {
              e.preventDefault();
              setIsSubmitting(true);
              // Simulate API call
              await new Promise((resolve) => setTimeout(resolve, 1000));
              setIsSubmitted(true);
              setIsSubmitting(false);
            }}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
