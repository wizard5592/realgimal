class Particle {
  constructor(position){
    this.acc = createVector(0,0);
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.pos = position.copy();
    this.r = 20;
    this.count = 20;
  }

  run(){
    this.update();
    this.display();
  }

  update(){
    this.edge();
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  display(){
    stroke(100);
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  edge(){
    if(this.pos.y > height-10 || this.pos.y < 10){
      system.origin = createVector(this.pos.x, this.pos.y);
      this.vel.y = this.vel.y * -1;  
      system.addParticle();
      this.count--;
    }  
    if(this.pos.x > width - 10 || this.pos.x < 10){
      system.origin = createVector(this.pos.x, this.pos.y);
      this.vel.x = this.vel.x * -1; 
      system.addParticle();
      this.count--;
    }
  }

  isDead(){
    return this.count < 0;
  }
}