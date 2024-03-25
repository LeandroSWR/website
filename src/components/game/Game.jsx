import React, { useState, useEffect, useRef } from 'react';
import ME from '../../assets/Me_full.png'
import './game.css'; // Your CSS file for styling

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50 });
  const keysPressed = useRef({});
  const requestRef = useRef();
  const previousTimeRef = useRef();
  // Handle fps
  const [fps, setFps] = useState(0);
  const fpsInterval = 1000 / 60;
  const lastFpsUpdate = useRef(performance.now());
  const frameCount = useRef(0);
  
  // Player Stats
  const playerSpeed = 10;

  const handleKeyDown = (event) => {
    keysPressed.current[event.key] = true;
  };

  const handleKeyUp = (event) => {
    keysPressed.current[event.key] = false;
  };

  const movePlayer = (deltaTime) => {
    setPlayerPosition((prevPosition) => {
      let newX = prevPosition.x;
      if (keysPressed.current['ArrowLeft']) {
        newX = Math.max(prevPosition.x - playerSpeed * deltaTime, 0);
      }
      if (keysPressed.current['ArrowRight']) {
        newX = Math.min(prevPosition.x + playerSpeed * deltaTime, 100); // Assuming 100 is the max x value
      }
      return {
        ...prevPosition,
        x: newX
      };
    });
  };

  const animate = (time) => {
    if (!previousTimeRef.current) {
      previousTimeRef.current = time;
    }
  
    const elapsedTime = time - previousTimeRef.current;
    
    // Check if enough time has passed to draw a new frame.
    if (elapsedTime > fpsInterval) {
      frameCount.current++;
      if (time - lastFpsUpdate.current >= 1000) { // Update FPS every second
        lastFpsUpdate.current = performance.now();
        setFps(frameCount.current); // Update the FPS displayed
        frameCount.current = 0;
      }

      previousTimeRef.current = time - (elapsedTime % fpsInterval); // Adjust for the next frame
  
      const deltaTime = elapsedTime / 1000; // Convert milliseconds to seconds for movement calculation
      // Move player based on deltaTime
      movePlayer(deltaTime);
    }
  
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }); // Only re-run the effect if keysPressed changes

  return (
    <div className="game-area">
      <div className="player" style={{ left: `${playerPosition.x}%`, bottom: `${playerPosition.y}%` }}>
        <img src={ME} alt="About Me" />
      </div>
      <div className="fps-counter" style={{ position: 'fixed', top: 0, right: 0, padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}>
        FPS: {fps}
      </div>
    </div>
  );
};

export default Game;
