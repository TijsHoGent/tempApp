import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-cross-reference',
  template: `<div *ngIf="$object | async as object">{{displayQuery(object)}}</div>`
})
export class CrossReferenceComponent implements OnInit {
  /**
   * The requested user.
   */
  private $object: Observable<any>;

  /**
   * The ID of the user.
   */
  @Input()
  private queryId: string;

  /**
   * The search term to translate the queryId to an object.
   */
  @Input()
  private searchTerm;

  /**
   * The fields of the searchTerm to display.
   */
  @Input()
  private displayQuery;

  /**
   * Loads the given searchTerm by the given queryId.
   */
  ngOnInit() {
    this.$object = this.searchTerm(this.queryId);
  }
}
