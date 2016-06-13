import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MagnetAppComponent } from '../app/magnet.component';

beforeEachProviders(() => [MagnetAppComponent]);

describe('App: Magnet', () => {
  it('should create the app',
      inject([MagnetAppComponent], (app: MagnetAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'magnet works!\'',
      inject([MagnetAppComponent], (app: MagnetAppComponent) => {
    expect(app.title).toEqual('magnet works!');
  }));
});
