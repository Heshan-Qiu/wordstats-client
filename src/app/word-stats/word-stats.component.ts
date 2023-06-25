import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { WordstatsService } from './wordstats.service';

@Component({
  selector: 'app-word-stats',
  templateUrl: './word-stats.component.html',
  styleUrls: ['./word-stats.component.css']
})
export class WordStatsComponent {
    url = "http://localhost:5026/stats";
    // url = "https://wordstats20230625015043.azurewebsites.net/stats";
    data: any;
    refreshSubscription: Subscription = new Subscription();
    
    constructor(private wordstatsService: WordstatsService) { }

    ngOnInit() {
        this.refreshSubscription = interval(1000).subscribe(
            (val) => { this.getWordStats() });
    }

    ngOnDestroy() {
        this.refreshSubscription.unsubscribe();
    }

    getWordStats() {
        this.wordstatsService.getWordStats(this.url).subscribe(
            data => {
                this.data = data;
                console.log(this.data);
            });
    }
}
