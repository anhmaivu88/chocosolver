defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_D = Clafer("c0_D").withCard(1, 1);
c0_b = c0_D.addChild("c0_b").withCard(0, 1);
c0_c = c0_D.addChild("c0_c").withCard(0, 1);
c0_c.refTo(Int);
c0_D.addConstraint(equal(joinRef(join($this(), c0_c)), constant(5)));
c0_D.addConstraint(equal(joinRef(join($this(), c0_c)), constant(5)));
c0_D.addConstraint(some(join($this(), c0_b)));
