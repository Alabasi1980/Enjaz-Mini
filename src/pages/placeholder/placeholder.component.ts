
import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder',
  template: `
    <div class="text-center p-10 bg-white rounded-lg shadow-md">
      <h1 class="text-3xl font-bold text-gray-800 mb-4">{{ title() }}</h1>
      <p class="text-gray-600">هذه الصفحة قيد الإنشاء حالياً.</p>
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
