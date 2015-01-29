scope({c0_Age:3, c0_Member:3, c0_Person:3});
defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_Person = Abstract("c0_Person");
c0_Age = c0_Person.addChild("c0_Age").withCard(1, 1);
c0_Team = Clafer("c0_Team").withCard(1, 1);
c0_Contractor = c0_Team.addChild("c0_Contractor").withCard(1, 1).extending(c0_Person);
c0_since = c0_Contractor.addChild("c0_since").withCard(1, 1);
c0_Member = c0_Team.addChild("c0_Member").withCard(2);
c0_Alice = Clafer("c0_Alice").withCard(1, 1).extending(c0_Person);
c0_Bob = Clafer("c0_Bob").withCard(1, 1).extending(c0_Person);
c0_Age.refTo(Int);
c0_since.refTo(Int);
c0_Member.refToUnique(c0_Person);
