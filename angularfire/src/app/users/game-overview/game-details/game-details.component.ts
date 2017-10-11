import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {GAMES_SERVICE, GameService} from "../../../service/types/gameService";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  /**
   * The game to display the details for.
   */
  private $game: Observable<any>;

  /**
   * @param {GameService} gameService The gameService to use to load the game from.
   * @param {ActivatedRoute} route The route taken to get to this component.
   */
  constructor(@Inject(GAMES_SERVICE) private gameService: GameService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.$game = this.route
      .paramMap
      .switchMap((params: ParamMap) => this.gameService.getGame(params.get('gameId')));
  }
}
