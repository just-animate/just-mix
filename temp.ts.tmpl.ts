describe('format()', () => {
    it('formats [-.1, cm] as -.1cm', () => {
      assert.equal('-0.100cm', lengths.format([-.1, 'cm']));
    });
    it('formats [1, cm] as 1cm', () => {
      assert.equal('1cm', lengths.format([1, 'cm']));
    }); 
  });

  describe('parse()', () => {
    it('parses 0 as [0, undefined]', () => {
      assert.deepEqual([0, undefined], lengths.parse('0'));
    });
    it('parses 1cm as [1, cm]', () => {
      assert.deepEqual([1, 'cm'], lengths.parse('1cm'));
    });
    it('parses -.1cm as [-.1, cm]', () => {
      assert.deepEqual([-.1, 'cm'], lengths.parse('-.1cm'));
    });
    it('parses 1cm as [1, cm]', () => {
      assert.deepEqual([1, 'cm'], lengths.parse('1cm'));
    });
  });

  describe('interpolate()', () => {
    it('interpolate 0, 1cm, 0 = 0', () => {
      assert.deepEqual([0, 'cm'], lengths.interpolate([0, undefined], [1, 'cm'], 0));
    });
    it('interpolate 0, 1cm, .5 = .5cm', () => {
      assert.deepEqual([.5, 'cm'], lengths.interpolate([0, undefined], [1, 'cm'], .5));
    });
    it('interpolate .5cm, 1cm, .5 = .75cm', () => {
      assert.deepEqual([.75, 'cm'], lengths.interpolate([.5, 'cm'], [1, 'cm'], .5));
    });
    it('interpolate 0, 1cm, 1 = 1cm', () => {
      assert.deepEqual([1, 'cm'], lengths.interpolate([0, undefined], [1, 'cm'], 1));
    });
  });

  describe('lengths()', () => {
    it('0, 1cm, 0 = 0', () => {
      assert.equal('0', lengths('0', '1cm', 0));
    });
    it('0, 1cm, .5 = .5cm', () => {
      assert.equal('0.500cm', lengths('0', '1cm', .5));
    });
    it('.5cm, 1cm, .5 = 0.750cm', () => {
      assert.equal('0.750cm', lengths('.5cm', '1cm', .5));
    });
    it('0, 1cm, 1 = 1cm', () => {
      assert.equal('1cm', lengths('0', '1cm', 1));
    });
  });