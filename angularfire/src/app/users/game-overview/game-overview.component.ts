import {Component, Inject, OnInit} from '@angular/core';
import {GAMES_SERVICE, GameService} from "../../service/types/gameService";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-game-overview',
  templateUrl: './game-overview.component.html',
  styleUrls: ['./game-overview.component.css']
})
export class GameOverviewComponent implements OnInit {
  /**
   * An observable of all the games in the system.
   */
  private games: Observable<any>;

  /**
   * @param {GameService} gameService The gameService to use to load the games.
   */
  constructor(@Inject(GAMES_SERVICE) private gameService: GameService) { }

  /**
   * This will initialize the games.
   */
  ngOnInit() {
    this.games = this.gameService.getAllGames();
  }
}
