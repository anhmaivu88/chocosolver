defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_A = Abstract("c0_A");
c0_b = c0_A.addChild("c0_b");
c0_c = c0_b.addChild("c0_c").withCard(0, 1);
c0_a1 = Clafer("c0_a1").withCard(1, 1).extending(c0_A);
c0_A.addConstraint(some([decl([b1 = local("b1")], join($this(), c0_b))], some(join(b1, c0_c))));
