
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  template: `
    <div class="c-placeholder-card">
      <h1 class="c-title c-title--page">{{ title() }}</h1>
      <p>هذه الصفحة قيد الإنشاء حالياً.</p>
    </div>
  `,
})
export class PlaceholderComponent {
  private route = inject(ActivatedRoute);
  title = signal('');
  
  constructor() {
    this.title.set(this.route.snapshot.data['title'] || 'صفحة غير متوفرة');
  }
}
