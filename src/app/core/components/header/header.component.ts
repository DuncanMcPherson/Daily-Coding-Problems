import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private isMenuOpen$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isMenuOpen$: Observable<boolean> = this.isMenuOpen$$.asObservable();

  public vm$: Observable<{ isMenuOpen: boolean }>;

  public ngOnInit(): void {
    this.vm$ = this.isMenuOpen$.pipe(
      map((isOpen) => {
        return {
          isMenuOpen: isOpen
        }
      })
    )
  }
}
