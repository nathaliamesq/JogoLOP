var x = 225;
var xd;
var yd = 350;
var disparou = false;
var vidas = 5;
var pontos = 0;
var nivel = 1;
var h = 24;
var r = 15;
var rm = 5;
var vxo = [];
var vyo = [];
var qtObjetos = 3;
var vxb = [];
var vyb = [];
var qtBonus = 2;
var bp = 1000;
var contTest = 2;
vel = 2;
tela = 0;
var ParseInt;
var ParseFloat;
var Prompt
var teclado;
var If;
var Else;
var Do;
var While;
var For;
var Vetor;
var fundo;
var Esquerda;
var Direita;

function preload()
{
  fundo = loadImage('Fundo.png');
  teclado = loadImage('Teclado.png');
  ParseInt = loadImage('ParseInt.png');
  ParseFloat = loadImage('ParseFloat.png');
  Prompt = loadImage('Prompt.png');
  If = loadImage('If.png');
  Else = loadImage('Else.png');
  Do = loadImage('Do.png');
  While = loadImage('While.png');
  For = loadImage('For.png');
  Vetor = loadImage('Vetor.png');
  Esquerda = loadImage('Esquerda.png');
  Direita = loadImage('Direita.png')
}

function setup()
{
   createCanvas(450, 400);
   for (var i = 0; i < qtObjetos; i++)
    {
      vxo[i] = random(70,370);
      vyo[i] = random(0,370);
    }
 
    for(var ii = 0; ii < qtBonus; ii++)
    {
      vxb[ii] = random(70,370);
      vyb[ii] = random(0,370);
    }
}

function draw()
{
  imageMode(CENTER)
  if (tela == 0)
  {
    background(0);
    image(fundo, 225, 200);
    textSize(32); 
    textFont('Georgia')
    fill(255);
    text("JOGO DA PROGRAMAÇÃO", 25, 40);
    textSize(20);
    textFont('Georgia');
    text("Pressione ENTER para começar", 82, 370);
    if (keyIsDown(ENTER))
    {
      tela = 1;
    }
  }
  if(tela == 1)
  {
    background(137, 183, 220);
    fill(255);
    textSize(20);
    textFont('Georgia');
    text("INSTRUÇÕES", 160, 40);
    text("OBJETIVO:", 20, 80);
    text("• Pegar as palavras pertecentes a cada fase", 20, 110);
    text("e atirar nas palavras que não são da fase.", 35, 135);
    text("COMO JOGAR:", 20, 200);
    text("• Para movimentar o jogador pressione", 20, 230);
    image(Esquerda, 55, 260);
    text("para ESQUERDA,  ", 87, 265);
    image(Direita, 273, 260);
    text("para DIREITA", 300, 265);
    text("e pressione ESPAÇO para atirar.", 35, 305);
    text("Pressione C para começar", 95, 370);
    if (keyIsDown(67))
    {
    tela = 2;
    }
  }
  if ( tela == 2)
  {
    background(137, 183, 220);
    fill(0,0,255)
    textSize(20);
    textFont('Georgia')
    text("Vidas: " + vidas, 20, 30);
    text("Pontos: " + pontos, 20, 50);
    text("Nível " + nivel, 360, 30);
    text("Entradas", 190, 30)
    
    
    for(var i = 0; i < qtObjetos; i++)
    {
      if(pontos>=0 && pontos<=200)
      {
        image(If, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width){
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>200 &&  pontos<=400)
      {
        image(Else, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>400 && pontos<=500)
      {
        image(Do, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>500 && pontos<=700)
      {
        image(While, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70, 370);
        }
      }
      if(pontos>700 && pontos<=800)
      {
        image(For, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>800 && pontos<=1000)
      {
        image(Vetor, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
    for(var ii = 0; ii < qtBonus; ii++)
    {
      fill(25, 75, 200);
      //ellipse(vxb[ii], vyb[ii], 85, vtb[ii]);
      imageMode(CENTER);
      if(pontos>=0 && pontos<=300)
      {
        image(ParseInt,vxb[ii], vyb[ii]);
        vyb[ii] = vyb[ii] + vel;
        if(vyb[ii] > width)
        {
          vyb[ii] = -random(400);
          vxb[ii] = random(70,370);
        }
        }
        if(pontos>300 && pontos<=600)
        {
          image(ParseFloat,vxb[ii], vyb[ii])
          vyb[ii] = vyb[ii] + vel;
          if(vyb[ii] > width)
          {
            vyb[ii] = -random(400);
            vxb[ii] = random(70,370);
          }
        }
        if(pontos>600 && pontos<=1000)
        {
          image(Prompt,vxb[ii], vyb[ii])
          vyb[ii] = vyb[ii] + vel;
          if(vyb[ii] > width)
          {
            vyb[ii] = -random(400);
            vxb[ii] = random(70,370);
          }
        }
      // V Correto
        if(dist(vxb[ii], vyb[ii], x, 350) < 60 && (vyb[ii] < 360 && vyb[ii] > 340))
        {
          vxb[ii] = -random(400);
          vyb[ii] = random(70,370)
          vidas = vidas + 1;
          if (vidas > 5)
          {
            vidas = 5;
            pontos = pontos + 100;
          }
        }
      }
      
      if(x < 45)
      {
        x = 45;
      }
      if(x > 405)
      {
        x = 405;
      }
      
      if (keyIsDown(LEFT_ARROW))
        x = x - 3;
      if (keyIsDown(RIGHT_ARROW))
        x = x + 3;
      fill(150);
      //ellipse(x, 350, 86, 29);
      imageMode(CENTER)
      image(teclado, x, 350);
      // V Erradas
      for( i = 0; i < qtObjetos; i++)
      {
        if(dist(vxo[i], vyo[i], x, 350) < 60 && (vyo[i] < 360 && vyo[i] > 340))
        {
          x = 225;
          y = 400;
          if(vidas <= 5 && vidas > 1)
          {
            vidas = vidas - 1;
          }
          else
          {
            vidas = 5;
            nivel = 1;
            pontos = 0;
            vel = 2;
            tela = 8;
          }
          if(pontos > 0)
          {
            pontos = pontos - 20;
          }
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if (keyIsDown(32) && disparou == false)
      {
        disparou = true;
        yd = 350;
        xd = x;
      }
      if(disparou)
      {
        ellipse(xd, yd, 10, 10)
        yd = yd - 10;
        if(yd < 0)
        {
          disparou = false;
        }
        
        for(i = 0; i < qtObjetos ;i++)
        {
        if((dist(vxo[i], vyo[i], xd, yd) < h/2 + rm) && disparou)
          {
            disparou = false;
            vyo[i] = -random(400);
            vxo[i] = random(70,370);
            if (pontos < 5000 )
            {
              pontos = pontos + 100;
              
            }
            if(pontos >= 5000)
            {
              pontos = 5000;
            }
          }
        }
      }
      
      if(pontos > bp)
      {
        if(nivel <= 5)
        {
          nivel = nivel + 1;
          if(nivel == contTest)
          {
            vel = vel + 0.5;
            contTest++;
          }
          bp = bp + 1000;
        }
      }  
    
      if ( nivel == 2)
      {
        tela = 3;  
      }
    }
  }  
  if ( tela == 3 )
  {
    background(137, 183, 220);
    fill('red');
    textSize(20);
    textFont('Georgia')
    text("Vidas: " + vidas, 20, 30);
    text("Pontos: " + pontos, 20, 50);
    text("Nível " + nivel, 360, 30);
    text("Esrutura condicional", 140, 30)
    
    if(pontos > bp)
    {
      if(nivel <= 5)
      {
        nivel = nivel + 1;
        if(nivel == contTest)
        {
          vel = vel + 0.5;
          contTest++;
        }
        bp = bp + 1000;
      }
    }
    
    for( i = 0; i < qtObjetos; i++)
    {
      if(pontos>1000 && pontos<=1200)
      {
        image(ParseInt, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>1200 &&  pontos<=1400)
      {
        image(ParseFloat, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>1400 && pontos<=1500)
      {
        image(Do, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>1500 && pontos<=1700) 
      {
        image(While, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>1700 && pontos<=1800)
      {
        image(For, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>1800 && pontos<=2000)
      {
        image(Vetor, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
    }
    for( ii = 0; ii < qtBonus; ii++)
    {
      fill(25, 75, 200);
      //ellipse(vxb[ii], vyb[ii], 30, vtb[ii]);
      if(pontos>1000 && pontos<=1500)
      {
        image(If,vxb[ii], vyb[ii])
        vyb[ii] = vyb[ii] + vel;
        if(vyb[ii] > width)
        {
          vyb[ii] = -random(400);
          vxb[ii] = random(70,370);
        }
      }
      if(pontos>1500 && pontos<=2000)
      {
        image(Else,vxb[ii], vyb[ii])
        vyb[ii] = vyb[ii] + vel;
        if(vyb[ii] > width)
        {
          vyb[ii] = -random(400);
          vxb[ii] = random(70,370);
        }
      }
      if(dist(vxb[ii], vyb[ii], x, 350) < r + 10)
      {
        vxb[ii] = -random(70,370);
        vyb[ii] = random(400)
        vidas = vidas + 1;
        if (vidas > 5)
        {
          vidas = 5;
          pontos = pontos + 100;
        }
      }
    }
    if(x < 45)
    {
      x = 45;
    }
    if(x > 405)
    {
      x = 405;
    }
    
    if (keyIsDown(LEFT_ARROW))
      x = x - 3;
    if (keyIsDown(RIGHT_ARROW))
      x = x + 3;
    fill(150);
    //ellipse(x, 350, 86, 29);
    imageMode(CENTER)
    image(teclado, x, 350);
    
    for(var i = 0; i < qtObjetos; i++)
    {
      if(dist(vxo[i], vyo[i], x, 350) < h/2 + r)
      {
        x = 225;
        y = 400;
        if(vidas <= 5 && vidas > 1)
        {
          vidas = vidas - 1;
        }
        else
        {
          vidas = 5;
          nivel = 1;
          pontos = 0;
          vel = 2;
          tela = 8;
        }
        if(pontos > 0)
        {
          pontos = pontos - 20;
        }
        vyo[i] = -random(400)
        vxo[i] = random(70,370);
      }
    }
    if (keyIsDown(32) && disparou == false)
    {
      disparou = true;
      yd = 350;
      xd = x;
    }
    if(disparou)
    {
      ellipse(xd, yd, 10, 10)
      yd = yd - 10;
      if(yd < 0)
      {
        disparou = false;
      }
      
      for(i = 0; i < qtObjetos ;i++)
      {
        if((dist(vxo[i], vyo[i], xd, yd) < h/2 + r) && disparou)
        {
          disparou = false;
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
          if (pontos < 5000 )
          {
            pontos = pontos + 100;
          }
          if(pontos >= 5000)
          {
            pontos = 5000;
          }
        }
      }
    }
    
    if (nivel== 3)
    {
      tela = 4;
    }
  } 
  if ( tela == 4)
  {
    background(137, 183, 220);
    fill(255, 204, 0);
    textSize(20);
    textFont('Georgia')
    text("Vidas: " + vidas, 20, 30);
    text("Pontos: " + pontos, 20, 50);
    text("Nível " + nivel, 360, 30);
    text("Repetição condional", 145, 30)
    
    if(pontos > bp)
    {
      if(nivel <= 5)
      {
        nivel = nivel + 1;
        if(nivel == contTest)
        {
          vel = vel + 0.5;
          contTest++;
        }
        bp = bp + 1000;
      }
    }
    
    for( i = 0; i < qtObjetos; i++)
    {
      rectMode(CENTER);
      //rect(vxo[i],vyo[i], 60, vt[i]);
      imageMode(CENTER)
      if(pontos>2000 && pontos<=2200)
      {
        image(ParseInt, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>2200 &&  pontos<=2400)
      {
        image(ParseFloat, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>2400 && pontos<=2500)
      {
        image(Else, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>2500 && pontos<=2700) 
      {
        image(If, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>2700 && pontos<=2800)
      {
        image(For, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>2800 && pontos<=3000)
      {
        image(Vetor, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
    }
    for( ii = 0; ii < qtBonus; ii++)
    {
      fill(25, 75, 200);
      //ellipse(vxb[ii], vyb[ii], 40, vtb[ii]);
      if(pontos>2000 && pontos<=2500)
      {
        image(Do,vxb[ii], vyb[ii])
        vyb[ii] = vyb[ii] + vel;
        if(vyb[ii] > width)
        {
          vyb[ii] = -random(400);
          vxb[ii] = random(70,370);
        }
      }
      if(pontos>2500 && pontos<=3000)
      {
        image(While,vxb[ii], vyb[ii])
        vyb[ii] = vyb[ii] + vel;
        if(vyb[ii] > width)
        {
          vyb[ii] = -random(400);
          vxb[ii] = random(70,370);
        }
      }
      if(dist(vxb[ii], vyb[ii], x, 350) < r + 10)
      {
        vxb[ii] = -random(70,370);
        vyb[ii] = random(400)
        vidas = vidas + 1;
        if (vidas > 5)
        {
          vidas = 5;
          pontos = pontos + 100;
        }
      }
    }
    if(x < 45)
    {
      x = 45;
    }
    if(x > 405)
    {
      x = 405;
    }
    
    if (keyIsDown(LEFT_ARROW))
      x = x - 3;
    if (keyIsDown(RIGHT_ARROW))
      x = x + 3;
    fill(150);
    //ellipse(x, 350, 86, 29);
    imageMode(CENTER)
    image(teclado, x, 350);
    
    for(i = 0; i < qtObjetos; i++)
    {
      if(dist(vxo[i], vyo[i], x, 350) < h/2 + r)
      {
        x = 225;
        y = 400;
        
        if(vidas <= 5 && vidas > 1)
        {
          vidas = vidas - 1;
        }
        else
        {
          vidas = 5;
          nivel = 1;
          pontos = 0;
          vel = 2;
          tela = 8;
        }
        if(pontos > 0)
        {
          pontos = pontos - 20;
        }
        vyo[i] = -random(400)
        vxo[i] = random(70,370);
      }
    }
    if (keyIsDown(32) && disparou == false)
    {
      disparou = true;
      yd = 350;
      xd = x;
    }
    if(disparou)
    {
      ellipse(xd, yd, 10, 10)
      yd = yd - 10;
      if(yd < 0)
      {
        disparou = false;
      }
      
      for(i = 0; i < qtObjetos ;i++)
      {
        if((dist(vxo[i], vyo[i], xd, yd) < h/2 + rm) && disparou)
        {
          disparou = false;
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
          if (pontos < 5000 )
          {
            pontos = pontos + 100;
          }
          if(pontos >= 5000)
          {
            pontos = 5000;
          }
        }
      }
    }
    
    if (nivel== 4)
    {
      tela = 5;
    }
  }
  if ( tela == 5)
  {
    background(137, 183, 220);
    textSize(20);
    textFont('Georgia')
    fill('#fae');
    text("Vidas: " + vidas, 20, 30);
    text("Pontos: " + pontos, 20, 50);
    text("Nível " + nivel, 360, 30);
    text("Laço contado", 175, 30);
    if(pontos >= bp)
    {
      if(nivel <= 5)
      {
        nivel = nivel + 1;
        if(nivel == contTest)
        {
          vel = vel + 0.5;
          contTest++;
        }
        bp = bp + 1000;
      }
    }
    
    for( i = 0; i < qtObjetos; i++)
    {
      rectMode(CENTER);
      //rect(vxo[i],vyo[i], 63, vt[i]);
      imageMode(CENTER)
      if(pontos>3000 && pontos<=3200)
      {
        image(ParseInt, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>3200 &&  pontos<=3300)
      {
        image(ParseFloat, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>3300 &&  pontos<=3400)
      {
        image(If, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>3400 && pontos<=3500)
      {
        image(Else, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>3500 && pontos<=3700) 
      {
        image(While, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>3700 && pontos<=3800)
      {
        image(Do, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>3800 && pontos<=4000)
      {
        image(Vetor, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
    }
    
    for(var ii = 0; ii < qtBonus; ii++)
    {
      fill(25, 75, 200);
      //ellipse(vxb[ii], vyb[ii], 31, vtb[ii])
      image(For, vxb[ii], vyb[ii])
      vyb[ii] = vyb[ii] + vel;
      if(vyb[ii] > width)
      {
        vyb[ii] = -random(400);
        vxb[ii] = random(70,370);
      }
      if(dist(vxb[ii], vyb[ii], x, 350) < r + 10)
      {
        vxb[ii] = -random(70,370);
        vyb[ii] = random(400)
        vidas = vidas + 1;
        if (vidas > 5)
        {
          vidas = 5;
          pontos = pontos + 100;
        }
      }
    }
    if(x < 45)
    {
      x = 45;
    }
    if(x > 405)
    {
      x = 405;
    }
    
    if (keyIsDown(LEFT_ARROW))
      x = x - 3;
    if (keyIsDown(RIGHT_ARROW))
      x = x + 3;
    fill(150);
    //ellipse(x, 350, 86, 29);
    imageMode(CENTER)
    image(teclado, x, 350);
    
    for(i = 0; i < qtObjetos; i++)
    {
      if(dist(vxo[i], vyo[i], x, 350) < h/2 + r)
      {
        x = 225;
        y = 400;
        
        if(vidas <= 5 && vidas > 1)
        {
          vidas = vidas - 1;
        }
        else
        {
          vidas = 5;
          nivel = 1;
          pontos = 0;
          vel = 2;
          tela = 8;
        }
        if(pontos > 0)
        {
          pontos = pontos - 20;
        }
        vyo[i] = -random(400)
        vxo[i] = random(70,370);
      }
    }
    if (keyIsDown(32) && disparou == false)
    {
      disparou = true;
      yd = 350;
      xd = x;
    }
    if(disparou)
    {
      ellipse(xd, yd, 10, 10)
      yd = yd - 10;
      if(yd < 0)
      {
        disparou = false;
      }
      
      for(i = 0; i < qtObjetos ;i++)
      {
        if((dist(vxo[i], vyo[i], xd, yd) < h/2 + rm) && disparou)
        {
          disparou = false;
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
          if (pontos < 5000 )
          {
            pontos = pontos + 100;
          }
          if(pontos >= 5000)
          {
            pontos = 5000;
          }
        }
      }
    }
    
    if (nivel== 5)
    {
      tela = 6; 
    }
  }
  if ( tela == 6)
  {
    background(137, 183, 220);
    textSize(20); 
    textFont('Georgia')
    fill('rgb(0,255,0)');
    text("Vidas: " + vidas, 20, 30);
    text("Pontos: " + pontos, 20, 50);
    text("Nível " + nivel, 360, 30);
    text("Vetores",195, 30);
    if(pontos > bp)
    {
      if(nivel <= 5)
      {
        nivel = nivel + 1;
        if(nivel == contTest)
        {
          vel = vel + 0.5;
          contTest++;
        }
        bp = bp + 1000;
      }
    }
    
    for( i = 0; i < qtObjetos; i++)
    {
      rectMode(CENTER);
      //rect(vxo[i],vyo[i], 60, vt[i]);
      imageMode(CENTER)
      if(pontos>4000 && pontos<=4200)
      {
        image(ParseInt, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>4200 &&  pontos<=4300)
      {
        image(ParseFloat, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>4300 &&  pontos<=4400)
      {
        image(If, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>4400 && pontos<=4500)
      {
        rectMode(CENTER);
        //rect(vxo[i],vyo[i], 39, vt[i]);
        image(Else, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>4500 && pontos<=4700) 
      {
        image(While, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>4700 && pontos<=4800)
      {
        image(Do, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
      if(pontos>4800 && pontos<=5000)
      {
        image(For, vxo[i], vyo[i]);
        vyo[i] = vyo[i] + vel;
        if(vyo[i] > width)
        {
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
        }
      }
    }
    
    for(var ii = 0; ii < qtBonus; ii++)
    {
      fill(25, 75, 200);
      //ellipse(vxb[ii], vyb[ii], 55, vtb[ii])
      image(Vetor, vxb[ii], vyb[ii])
      vyb[ii] = vyb[ii] + vel;
      if(vyb[ii] > width)
      {
        vyb[ii] = -random(400);
        vxb[ii] = random(70,370);
      }
      if(dist(vxb[ii], vyb[ii], x, 350) < r + 10)
      {
        vxb[ii] = -random(70,370);
        vyb[ii] = random(400)
        vidas = vidas + 1;
        if (vidas > 5)
        {
          vidas = 5;
          pontos = pontos + 100;
        }
      }
    }
    if(x < 45)
    {
      x = 45;
    }
    if(x > 405)
    {
      x = 405;
    }
    
    if (keyIsDown(LEFT_ARROW))
      x = x - 3;
    if (keyIsDown(RIGHT_ARROW))
      x = x + 3;
    fill(150);
    //ellipse(x, 350, 86, 29);
    imageMode(CENTER)
    image(teclado, x, 350);
  
    for(i = 0; i < qtObjetos; i++)
    {
      if(dist(vxo[i], vyo[i], x, 350) < h/2 + r)
      {
        x = 225;
        y = 400;
       
        if(vidas <= 5 && vidas > 1)
        {
          vidas = vidas - 1;
        }
        else
        {
          vidas = 5;
          nivel = 1;
          pontos = 0;
          vel = 2;
          tela = 8;
        }
        if(pontos > 0)
        {
          pontos = pontos - 20;
        }
        vyo[i] = -random(400)
        vxo[i] = random(70,370);
      }
    }
    if (keyIsDown(32) && disparou == false)
    {
      disparou = true;
      yd = 350;
      xd = x;
    }
    if(disparou)
    {
      ellipse(xd, yd, 10, 10)
      yd = yd - 10;
      if(yd < 0)
      {
        disparou = false;
      }
      
      for(i = 0; i < qtObjetos ;i++)
      {
        if((dist(vxo[i], vyo[i], xd, yd) < h/2 + rm) && disparou)
        {
          disparou = false;
          vyo[i] = -random(400);
          vxo[i] = random(70,370);
          if (pontos < 5000 )
          {
            pontos = pontos + 100;
          }
          if(pontos >= 5000)
          {
            pontos = 5000;
          }
        }
      }
    }

    if (pontos>=5000 )
    {
      tela = 7;
    }
  }
  if ( tela == 7)
  {
    background(137, 183, 220);
    textSize(32);
    textFont('Georgia')
    fill(255);
    text("APROVADO!", 130, 200);
    textSize(20);
    textFont('Georgia')
    text("Você já pode pagar LIP.", 120, 240);
    text("Aperte SHIFT para recomeçar o jogo.", 70, 350);
        
    if (keyIsDown(16))
    {
      tela = 1;
    }
  }
  if ( tela == 8) 
  {
    background(137, 183, 220);
    textSize(32); 
    textFont('Georgia')
    fill(255);
    text("REPROVADO!", 130, 200);
    textSize(20)
    textFont('Georgia')
    text("Aperte L para pagar LOP novamente.", 70, 235);
    if (keyIsDown(76) )
    {
      tela = 2;
      nivel = 1;
      vidas = 5;
      pontos = 0;
      vel = 2;
    }
  }
}