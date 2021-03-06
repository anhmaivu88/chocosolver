defaultScope(1);
intRange(-8, 7);
stringLength(16);

c0_Car = Abstract("c0_Car");
c0_ABS = c0_Car.addChild("c0_ABS").withCard(0, 1);
c0_CC = c0_Car.addChild("c0_CC").withCard(0, 1);
c0_ACC = c0_CC.addChild("c0_ACC").withCard(0, 1);
c0_Transmission = c0_Car.addChild("c0_Transmission").withCard(1, 1).withGroupCard(1, 1);
c0_Automatic = c0_Transmission.addChild("c0_Automatic").withCard(0, 1);
c0_Manual = c0_Transmission.addChild("c0_Manual").withCard(0, 1);
c0_FCA = c0_Car.addChild("c0_FCA").withCard(0, 1);
c0_Sensor = c0_FCA.addChild("c0_Sensor").withCard(1, 1).withGroupCard(1, 1);
c0_Radar = c0_Sensor.addChild("c0_Radar").withCard(0, 1);
c0_Lidar = c0_Sensor.addChild("c0_Lidar").withCard(0, 1);
c0_Alert = c0_FCA.addChild("c0_Alert").withCard(0, 1).withGroupCard(1, 1);
c0_Haptic = c0_Alert.addChild("c0_Haptic").withCard(0, 1);
c0_Audible = c0_Alert.addChild("c0_Audible").withCard(0, 1);
c0_aCar = Clafer("c0_aCar").withCard(1, 1).extending(c0_Car);
c0_ACC.addConstraint(some(join(joinParent(joinParent($this())), c0_FCA)));
