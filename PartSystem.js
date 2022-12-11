class ParticleSystem{
  constructor(position){
    this.origin = position.copy();
    this.particles = [];
  }
  
  addParticle(){
    this.particles.push(new Particle(this.origin));
  }
  
  removeParticle(){
    for(var i = 0; i < this.particles.length; i++){
      this.particles.pop();
    }
  }
  run(){
    for (let i = this.particles.length-1; i >= 0; i--) {
      let p = this.particles[i];
      p.run();
      if (p.isDead()) {
        this.particles.splice(i, 1);
      }
    }
  }
}