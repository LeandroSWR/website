import React, { useState, useEffect, useRef } from 'react';
import ME from '../../assets/Me_full.png'
import './game.css'; // Your CSS file for styling
import Rigidbody from './engine/Rigidbody.js'

const Game = () => {
  const [playerPosition, setPlayerPosition] = useState({ x: 50, y: 50});
  const playerRigidbody = useRef(new Rigidbody(98.7, 10)); // Initialize with gravity
  const keysPressed = useRef({});
  const requestRef = useRef();
  const previousTimeRef = useRef();
  
  const lastFpsUpdate = useRef(performance.now());
  const [fps, setFps] = useState(0);
  const frameCount = useRef(0);

  // Constants
  const playerSpeed = 10;
  const fpsInterval = 16.66666666666667;

  const handleKeyDown = (event) => {
    keysPressed.current[event.key] = true;
  };

  const handleKeyUp = (event) => {
    keysPressed.current[event.key] = false;
  };

  const movePlayer = (deltaTime) => {
    // Handle movement
    if (keysPressed.current['ArrowLeft']) {
      playerRigidbody.current.velocity.x = -playerSpeed;
    }
    else if (keysPressed.current['ArrowRight']) {
      playerRigidbody.current.velocity.x = playerSpeed;
    }
    else {
      playerRigidbody.current.velocity.x = 0;
    }

    // Handle jumping
    if (keysPressed.current['ArrowUp']) {
      playerRigidbody.current.jump();
    }
    else {
      playerRigidbody.current.stopJump(); // This will shorten the jump if the button is released
    }

    playerRigidbody.current.update(deltaTime);
    setPlayerPosition( {
      x: playerRigidbody.current.position.x,
      y: playerRigidbody.current.position.y
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
