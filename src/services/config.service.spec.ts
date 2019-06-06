import { TestBed } from '@angular/core/testing';

import { Config.ServiceService } from './config.service.service';

describe('Config.ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Config.ServiceService = TestBed.get(Config.ServiceService);
    expect(service).toBeTruthy();
  });
});
