import GameObject from './GameObject';

//Enum sinnvoll?
//evtl. Verknuepfung zwischen Player und Enemies -> stats werden anhand von lvl generiert
var EnemyEnum = Object.freeze({"Default", "Strong", "Boss"});

class Enemy extends GameObject{
  const hp = 100;
  const sizeX = 10;
  const sizeY = 10;

  constructor(){
    //Brauchen Methode zum pseudo-random generieren von Positionen der Gegner
    super(initPosX, initPosY);

    //Setzen der Werte abhaengig von uebergebenem Enum?
    //this.setHP(hp);
    //this.setSize(sizeX, sizeY);
  }
}
