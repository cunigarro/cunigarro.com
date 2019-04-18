import processing.core.*; 
import processing.xml.*; 

import java.applet.*; 
import java.awt.Dimension; 
import java.awt.Frame; 
import java.awt.event.MouseEvent; 
import java.awt.event.KeyEvent; 
import java.awt.event.FocusEvent; 
import java.awt.Image; 
import java.io.*; 
import java.net.*; 
import java.text.*; 
import java.util.*; 
import java.util.zip.*; 
import java.util.regex.*; 

public class cinetica_1 extends PApplet {

int elementos;
int[] posX;
int[] posY;
float[] velX;
float[] velY;
int[] r;
int[] g;
int[] b;
boolean direccion=true;
int maxY = 10;
float gravedad = 0.1f;
int friccion = 1;

public void setup() {

  elementos=80;

  size(400,400);
  background(0);

  posX=new int[elementos];
  posY=new int[elementos];
  velX=new float[elementos];
  velY=new float[elementos];
  r=new int[elementos];
  g=new int[elementos];
  b=new int[elementos];

  for(int i=0;i<posX.length;i++) {
    posX[i]=(int)random(16,width-16);
    posY[i]=(int)random(16,width-16);
    velX[i]=-3+random(6);
    velY[i]=-random(4);
    r[i]=(int)random(255);
    g[i]=(int)random(255);
    b[i]=(int)random(255);
  }

  for(int i=0;i<velX.length;i++) {
    if(i % 2 == 0) {
      velX[i]=-1;
    }
    else {
      velX[i]=1;
    }

    if(i % 2 == 0) {
      velY[i]=-1;
    }
    else {
      velY[i]=1;
    }
  }
}


public void draw () { 

  noStroke();
  fill(0,50);
  rect(0,0,width,height);

  strokeWeight(1.5f);
  noFill();

  for(int i=0;i<posX.length;i++) { 

    stroke(r[i],g[i],b[i]);
    ellipse(posX[i],posY[i],30,30);

    if(posX[i]+15>=width||posX[i]-15<=0) {
      velX[i]*=-1;
    }

    if(posY[i]+15>=height) {

      velY[i]*=-1;

      if(posY[i] + 15 - height >= 0.15f)

      {

        posY[i] = height - 15;
      }
    }


    if((velY[i]<maxY))
    {
      velY[i] += gravedad;
    }

    velY[i]*=friccion;

    posX[i]+=velX[i];
    posY[i]+=velY[i];
  }
}

public void mousePressed() {

  for(int i=0;i<posX.length;i++) {
    posX[i]=(int)random(16,width-16);
    posY[i]=(int)random(16,width-16);
    velX[i]=-3+random(6);
    velY[i]=-random(4);
    r[i]=(int)random(255);
    g[i]=(int)random(255);
    b[i]=(int)random(255);
  } 

  if(direccion==true) {
    direccion=false;
    for(int i=0;i<velX.length;i++) {
      if(i % 2 == 0) {
        velX[i]=-1;
      }
      else {
        velX[i]=1;
      }

      if(i % 2 == 0) {
        velY[i]=-1;
      }
      else {
        velY[i]=1;
      }
    }
  } 
  else if(direccion==false) {
    direccion=true;
    for(int i=0;i<velY.length;i++) {
      if(i % 2 == 0) {
        velX[i]=-1;
      }
      else {
        velX[i]=1;
      }

      if(i % 2 == 0) {
        velY[i]=-1;
      }
      else {
        velY[i]=1;
      }
    }
  }
}

  static public void main(String args[]) {
    PApplet.main(new String[] { "--bgcolor=#FFFFFF", "cinetica_1" });
  }
}
