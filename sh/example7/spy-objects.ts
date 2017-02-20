describe('demonstrate spyObject', () => {

  it('can be done with createSpyObj', () => {
    const tape = {play: () => {}, pause: () => { return 'paused' }, stop: () => {}, rewind: () => {}};
    expect(tape.pause()).toEqual('paused');
  });

  it('can be done with createSpyObj', () => {
    const tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']); // stub all methods
    spyOn(tape, 'pause').and.returnValue('paused'); // mock pause
    tape.play();
    tape.pause();
    tape.rewind(0);
    expect(tape.pause()).toEqual('paused');
  })
});
