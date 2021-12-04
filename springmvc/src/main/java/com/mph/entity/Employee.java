package com.mph.entity;

import java.sql.Blob;
import java.util.Arrays;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

import org.hibernate.type.BlobType;

@Entity
@Table(name = "EMPTABLE")
public class Employee {

	@Id
	@GeneratedValue
	private int eid;

	@Column
	private String ename;
	@Column
	private String email;
	@Column
	private String password;
	@Column
	private String gender;
	
	@Column
	private String fileName;
	
	@Column
	private double lat;
	
	@Column
	private double lon;
	
	@Column()
	@Lob
	private String EPicture;

	
	public Employee(int eid, String ename, String email, String password, String gender, String fileName, double lat,
			double lon, String ePicture) {
		super();
		this.eid = eid;
		this.ename = ename;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.fileName = fileName;
		this.lat = lat;
		this.lon = lon;
		this.EPicture = ePicture;
	}


	public Employee() {
		super();
	}


	public int getEid() {
		return eid;
	}


	public void setEid(int eid) {
		this.eid = eid;
	}


	public String getEname() {
		return ename;
	}


	public void setEname(String ename) {
		this.ename = ename;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public String getFileName() {
		return fileName;
	}


	public void setFileName(String fileName) {
		this.fileName = fileName;
	}


	public double getLat() {
		return lat;
	}


	public void setLat(double lat) {
		this.lat = lat;
	}


	public double getLon() {
		return lon;
	}


	public void setLon(double lon) {
		this.lon = lon;
	}


	public String getEPicture() {
		return EPicture;
	}


	public void setEPicture(String ePicture) {
		this.EPicture = ePicture;
	}


	@Override
	public String toString() {
		return "Employee [eid=" + eid + ", ename=" + ename + ", email=" + email + ", password=" + password + ", gender="
				+ gender + ", fileName=" + fileName + ", lat=" + lat + ", lon=" + lon + ", EPicture="
				 + "]";
	}

	
	
	

}
