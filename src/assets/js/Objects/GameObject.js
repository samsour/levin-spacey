class GameObject{

  var posX, posY, hp, velX, velY, sizeX, sizeY;

  constructor(x, y){
    this.setPos(x,y);
  }

  //Getter//
  function getXPos(){
    return this.posX;
  }

  function getYPos(){
    return this.posX;
  }

  function getHP(){
    return this.hp;
  }

  function getSizeX(){
    return this.sizeX;
  }

  function getSizeY(){
    return this.sizeY;
  }

  //Setter//
  function setPos(x, y){
    this.posX = x;
    this.posY = y;
  }

  function setHP(newHP){
    this.hp = newHP;
  }

  function setSize(x,y){
    this.sizeX = x;
    this.sizeY = y;
  }
}
