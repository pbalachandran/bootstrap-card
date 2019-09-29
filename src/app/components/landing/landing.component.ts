import { Component, OnInit } from '@angular/core';

class Card {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class CardGroup {
  public cards: Card[];
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public cards: Card[] = [
    new Card('Card1'),
    new Card('Card2'),
    new Card('Card3'),
    new Card('Card4'),
    new Card('Card5'),
    new Card('Card6'),
    new Card('Card7'),
  ];

  public cardGroups = new Array<CardGroup>(3);

  constructor() {
    let currentGC;
    let index = 0;
    this.cards.forEach((card) => {
      if(index % 3 === 0) {
        currentGC = new CardGroup();
        currentGC.cards = new Array<Card>(3);
        this.cardGroups.push(currentGC);
      }
      currentGC.cards.push(card);
      index++;
    });

    console.log('Finally: ', this.cardGroups);
  }

  ngOnInit() {
  }
}
