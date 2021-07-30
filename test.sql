/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 50733
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50733
File Encoding         : 65001

Date: 2021-07-30 17:18:58
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ts_bzdm
-- ----------------------------
DROP TABLE IF EXISTS `ts_bzdm`;
CREATE TABLE `ts_bzdm` (
  `KIND` varchar(6) NOT NULL COMMENT '种类',
  `BT` varchar(160) DEFAULT NULL COMMENT '标题',
  `CODE` varchar(15) NOT NULL COMMENT '代码',
  `MC` varchar(160) DEFAULT NULL COMMENT '名称',
  `SFJY` varchar(1) DEFAULT '0' COMMENT '是否禁用',
  `PXH` int(11) DEFAULT NULL COMMENT '排序号',
  PRIMARY KEY (`KIND`,`CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of ts_bzdm
-- ----------------------------
INSERT INTO `ts_bzdm` VALUES ('00003', '性别', '09_00003-1', '男', '0', '0');
INSERT INTO `ts_bzdm` VALUES ('00003', '性别', '09_00003-2', '女', '0', '0');
INSERT INTO `ts_bzdm` VALUES ('00003', '性别', '09_00003-255', '其他', '0', '0');

-- ----------------------------
-- Table structure for t_depart
-- ----------------------------
DROP TABLE IF EXISTS `t_depart`;
CREATE TABLE `t_depart` (
  `BMDM` varchar(20) NOT NULL COMMENT '部门代码',
  `DWDM` varchar(6) DEFAULT NULL COMMENT '单位代码',
  `BMID` varchar(16) DEFAULT NULL COMMENT '部门ID',
  `BMMC` varchar(80) DEFAULT NULL COMMENT '部门名称',
  `SFJY` varchar(1) DEFAULT '0' COMMENT '是否禁用',
  `PXH` int(255) DEFAULT NULL COMMENT '排序号',
  PRIMARY KEY (`BMDM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_depart
-- ----------------------------
INSERT INTO `t_depart` VALUES ('32010001', '320100', '01', '立案庭', '0', '1');
INSERT INTO `t_depart` VALUES ('32010002', '320100', '02', '业务庭', '0', '2');
INSERT INTO `t_depart` VALUES ('32010003', '320100', '03', '办公室', '0', '3');

-- ----------------------------
-- Table structure for t_user
-- ----------------------------
DROP TABLE IF EXISTS `t_user`;
CREATE TABLE `t_user` (
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
  `PXH` int(11) NOT NULL COMMENT '排序号',
  PRIMARY KEY (`YHDM`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of t_user
-- ----------------------------
INSERT INTO `t_user` VALUES ('000000a', '000000', 'a', '暗黑大剑', 'a', '09_00003-2', '32010001', '20210717', '2020-10-01 05:05:02', '0', '13');
INSERT INTO `t_user` VALUES ('000000a1', '000000', 'a1', '阿斯顿', '123', '09_00003-1', '32010003', '20210722', '2021-07-30 13:07:52', '0', '15');
INSERT INTO `t_user` VALUES ('000000a2', '000000', 'a2', '公司的', '123', '09_00003-2', '32010002', '20210709', '2020-10-01 05:05:02', '1', '1');
INSERT INTO `t_user` VALUES ('000000asd', '000000', 'asd', '中兄次之改2', '12', '09_00003-1', '32010002', '20210729', '2021-07-30 17:07:70', '0', '8');
INSERT INTO `t_user` VALUES ('000000bnnb', '000000', 'bnnb', '还不够', '1', '09_00003-255', '32010002', '20210709', '2021-07-30 13:07:80', '0', '14');
INSERT INTO `t_user` VALUES ('000000gf', '000000', 'gf', '爱国方式2', 'asd', '09_00003-1', '32010001', '20210707', '2020-10-01 05:05:02', '0', '9');
INSERT INTO `t_user` VALUES ('000000kl', '000000', 'kl', '电话那端', '12', '09_00003-255', '32010002', '20210714', '2020-10-01 05:05:02', '0', '10');
INSERT INTO `t_user` VALUES ('000000nvbhgsdfas', '000000', 'nvbhgsdfas', '请问', '1', '09_00003-1', '32010001', '20210729', '2021-07-30 16:07:85', '0', '20');
INSERT INTO `t_user` VALUES ('000000vcbcb', '000000', 'vcbcb', '明白你买个放大器', '1', '09_00003-2', '32010001', '20210715', '2021-07-30 16:07:40', '0', '21');
INSERT INTO `t_user` VALUES ('000000vcx', '000000', 'vcx', '必须', 'asd', '09_00003-1', '32010002', '20210729', '2021-07-30 15:07:74', '0', '17');
INSERT INTO `t_user` VALUES ('000000xg', '000000', 'xg', '小刚', '1234', '09_00003-1', '32010003', '20210716', '2020-10-01 05:05:02', '0', '3');
INSERT INTO `t_user` VALUES ('000000xh', '000000', 'xh', '小红', '1234', '09_00003-1', '32010002', '20200102', '2020-10-01 05:05:02', '0', '4');
INSERT INTO `t_user` VALUES ('000000xm', '000000', 'xm', '小明改2', '123456', '09_00003-1', '32010001', '20000101', '2020-10-01 05:05:02', '0', '5');
INSERT INTO `t_user` VALUES ('000000xq', '000000', 'xq', '小强改1', '12', '09_00003-1', '32010003', '20210715', '2020-10-01 05:05:02', '0', '6');
INSERT INTO `t_user` VALUES ('000000yj', '000000', 'yj', '不能吃', '12', '09_00003-2', '32010002', '20210722', '2020-10-01 05:05:02', '0', '11');
INSERT INTO `t_user` VALUES ('000000z', '000000', 'z', '不想吃不下a', '1', '09_00003-2', '32010002', '20210709', '2021-07-30 13:07:74', '0', '7');
