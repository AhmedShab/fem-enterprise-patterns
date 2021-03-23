import { Component } from '@angular/core';
import { Widget } from '@fem/api-interfaces';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'fem-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  price: string;
  mode: string;
  widgets: Widget[];

  reCalculateTotal(mode: string, widgets: Array<Widget>, widget: Widget) {
    this.widgets = this.updateWidgets(mode, widgets, widget);
    this.price = this.getTotalPrice(widgets);
  }

  updateWidgets(mode: string, widgets: Array<Widget>, widget: Widget) {
    switch (mode) {
      case 'create':
        return this.addWidget(widgets, widget);
      case 'update':
        return this.updateWidget(widgets, widget);
      case 'delete':
        return this.deleteWidget(widgets, widget);
      default:
        break;
    }
  }

  addWidget(widgets: Array<Widget>, widget: object) {
    const newWidget = Object.assign({}, widget, { id: uuidv4() });
    return [...widgets, newWidget];
  }

  updateWidget(widgets: Array<any>, widget: any) {
    return widgets.map(_widget => widget.id === _widget.id
      ? Object.assign({}, widget) : _widget);
  }

  deleteWidget(widgets: Array<any>, widget: any) {
    return widgets.filter(_widget => widget.id !== _widget.id);
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }
}
