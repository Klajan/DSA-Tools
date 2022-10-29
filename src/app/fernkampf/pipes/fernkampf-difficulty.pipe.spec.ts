import { SteilschussDifficultyPipe, ReitDifficultyPipe, LichtDifficultyPipe, SchnellschussDifficultyPipe, ZweiteATDifficultyPipe } from './fernkampf-difficulty.pipe';

describe('SteilschussDifficultyPipe', () => {
  it('create an instance', () => {
    const pipe = new SteilschussDifficultyPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('ReitDifficultyPipe', () => {
  it('create an instance', () => {
    const pipe = new ReitDifficultyPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('LichtDifficultyPipe', () => {
  it('create an instance', () => {
    const pipe = new LichtDifficultyPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('SchnellschussDifficultyPipe', () => {
  it('create an instance', () => {
    const pipe = new SchnellschussDifficultyPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('ZweiteATDifficultyPipe', () => {
  it('create an instance', () => {
    const pipe = new ZweiteATDifficultyPipe();
    expect(pipe).toBeTruthy();
  });
});
