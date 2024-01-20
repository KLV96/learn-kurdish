import Header from "../components/Header/Header";
import { useLocation } from "react-router-dom";
import Style from "./QuizResult.module.css";
import { useEffect } from "react";

function QuizResult() {
  const location = useLocation();
  const percentage = Math.round(
    (location.state.answersScore / location.state.numOfQuestions) * 100
  );
  const numOfStars = Math.round(
    (location.state.answersScore / location.state.numOfQuestions) * 5
  );

  useEffect(() => {
    if (percentage >= 80) {
      let W = window.innerWidth;
      let H = document.getElementById("confetti").clientHeight;
      const canvas = document.getElementById("confetti");
      const context = canvas.getContext("2d");
      const maxConfettis = 25;
      const particles = [];

      const possibleColors = [
        "#ff7336",
        "#f9e038",
        "#02cca4",
        "#383082",
        "#fed3f5",
        "#b1245a",
        "#f2733f",
      ];

      function randomFromTo(from, to) {
        return Math.floor(Math.random() * (to - from + 1) + from);
      }

      function confettiParticle() {
        this.x = Math.random() * W; // x
        this.y = Math.random() * H - H; // y
        this.r = randomFromTo(11, 33); // radius
        this.d = Math.random() * maxConfettis + 11;
        this.color =
          possibleColors[Math.floor(Math.random() * possibleColors.length)];
        this.tilt = Math.floor(Math.random() * 33) - 11;
        this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
        this.tiltAngle = 0;

        this.draw = function () {
          context.beginPath();
          context.lineWidth = this.r / 2;
          context.strokeStyle = this.color;
          context.moveTo(this.x + this.tilt + this.r / 3, this.y);
          context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
          return context.stroke();
        };
      }

      function Draw() {
        const results = [];

        // Magical recursive functional love
        requestAnimationFrame(Draw);

        context.clearRect(0, 0, W, window.innerHeight);

        for (var i = 0; i < maxConfettis; i++) {
          results.push(particles[i].draw());
        }

        let particle = {};
        let remainingFlakes = 0;
        for (var i = 0; i < maxConfettis; i++) {
          particle = particles[i];

          particle.tiltAngle += particle.tiltAngleIncremental;
          particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
          particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

          if (particle.y <= H) remainingFlakes++;

          // If a confetti has fluttered out of view,
          // bring it back to above the viewport and let if re-fall.
          if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
            particle.x = Math.random() * W;
            particle.y = -30;
            particle.tilt = Math.floor(Math.random() * 10) - 20;
          }
        }

        return results;
      }

      window.addEventListener(
        "resize",
        function () {
          W = window.innerWidth;
          H = window.innerHeight;
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        },
        false
      );

      // Push new confetti objects to `particles[]`
      for (var i = 0; i < maxConfettis; i++) {
        particles.push(new confettiParticle());
      }

      // Initialize
      canvas.width = W;
      canvas.height = H;
      Draw();
    }
  }, []);

  return (
    <>
      {percentage >= 80 && <canvas id="confetti"></canvas>}

      <Header />
      <div className={Style.quizResultContainer}>
        <h1
          className={`${Style.finalScore} ${
            percentage > 60 && Style.animatedFinalScore
          }`}
        >
          {percentage}%
        </h1>
        <div>
          {[...Array(numOfStars)].map((e, i) => (
            <img
              src={process.env.PUBLIC_URL + "/star.png"}
              className={Style.star}
              alt="Star"
              key={i}
            />
          ))}
          {percentage < 50 && (
            <div className={Style.gradeFeedBackContainer}>
              <p>Mamoste would be disappointed 😭</p>
              <p>You need to revise more!</p>
            </div>
          )}
          {percentage >= 90 && (
            <div className={Style.gradeFeedBackContainer}>
              <p>Her Biji! Mamoste would be proud 🥹</p>
            </div>
          )}
        </div>
      </div>
      <canvas id="birthday"></canvas>
    </>
  );
}

export default QuizResult;
