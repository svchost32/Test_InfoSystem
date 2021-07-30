# 建库
CREATE TABLE `T_USER` (
  `YHDM` varchar(20) NOT NULL COMMENT '用户代码',
  `DWDM` varchar(6) DEFAULT NULL COMMENT '单位代码',
  `YHID` varchar(14) DEFAULT NULL COMMENT '用户ID',
  `YHXM` varchar(20) DEFAULT NULL COMMENT '用户姓名',
  `YHKL` varchar(20) DEFAULT NULL COMMENT '用户口令',
  `YHXB` varchar(20) DEFAULT NULL COMMENT '用户性别',
  `YHBM` varchar(20) DEFAULT NULL COMMENT '用户部门',
  `CSRQ` varchar(8) DEFAULT NULL COMMENT '出生日期',
  `DJSJ` varchar(19) DEFAULT NULL COMMENT '登记时间',
  `SFJY` varchar(1) DEFAULT '0' COMMENT '是否禁用',
  `PXH` int(11) DEFAULT NULL COMMENT '排序号',
  PRIMARY KEY (`YHDM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


CREATE TABLE `TS_BZDM` (
  `KIND` varchar(6) NOT NULL COMMENT '种类',
  `BT` varchar(160) DEFAULT NULL COMMENT '标题',
  `CODE` varchar(15) NOT NULL COMMENT '代码',
  `MC` varchar(160) DEFAULT NULL COMMENT '名称',
  `SFJY` varchar(1) DEFAULT '0' COMMENT '是否禁用',
  `PXH` int(11) DEFAULT NULL COMMENT '排序号',
  PRIMARY KEY (`KIND`,`CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;



# 写入
// T_DEPART
insert into T_DEPART (BMDM, DWDM, BMID, BMMC, PXH) values ('32010001', '320100', '01', '立案庭', 1);
insert into T_DEPART (BMDM, DWDM, BMID, BMMC, PXH) values ('32010002', '320100', '02', '业务庭', 2);
insert into T_DEPART (BMDM, DWDM, BMID, BMMC, PXH) values ('32010003', '320100', '03', '办公室', 3);

// TS_BZDM
INSERT INTO TS_BZDM (KIND, BT, CODE, MC, SFJY, PXH) VALUES ('00003', '性别', '09_00003-1', '男', '0', 0);
INSERT INTO TS_BZDM (KIND, BT, CODE, MC, SFJY, PXH) VALUES ('00003', '性别', '09_00003-2', '女', '0', 0);
INSERT INTO TS_BZDM (KIND, BT, CODE, MC, SFJY, PXH) VALUES ('00003', '性别', '09_00003-255', '其他', '0', 0);

