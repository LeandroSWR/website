export default class Rigidbody {
  constructor(gravity, maxJumpHeight) {
    this.velocity = { x: 0, y: 0 };
    this.isJumping = false;
    this.gravity = gravity;
    this.maxJumpHeight = maxJumpHeight;
    this.position = { x: 50, y: 50 }; // Starting position
    this.jumpStartY = null;
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.jumpStartY = this.position.y;
      this.velocity.y = Math.sqrt(2 * this.gravity * this.maxJumpHeight); // Impulse for the jump
    }
  }

  stopJump() {
    // If the player is ascending in the jump, reduce the upward velocity to shorten the jump.
    if (this.isJumping && this.velocity.y > 0) {
      this.velocity.y *= 0.5;
    }
  }

  update(deltaTime) {
    // Apply gravity
    this.velocity.y -= this.gravity * deltaTime;

    // Update position
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;

    // Check if the player has landed
    if (this.position.y <= 50) {
      this.position.y = 50;
      this.isJumping = false;
      this.jumpStartY = null;
    }
  }
}
