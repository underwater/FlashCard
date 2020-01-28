import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { PlaygroundModule } from 'angular-playground';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

PlaygroundModule
  .configure({
    selector: 'app-root',
    overlay: false,
    modules: [FormsModule],
  });

platformBrowserDynamic().bootstrapModule(PlaygroundModule);
