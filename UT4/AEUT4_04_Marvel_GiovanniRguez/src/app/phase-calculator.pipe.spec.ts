import { PhaseCalculatorPipe } from './pipes/phase-calculator.pipe';

describe('PhaseCalculatorPipe', () => {
  it('create an instance', () => {
    const pipe = new PhaseCalculatorPipe();
    expect(pipe).toBeTruthy();
  });
});
