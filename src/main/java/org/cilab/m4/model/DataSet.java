package org.cilab.m4.model;

public class DataSet {
	
	/**
	 * Class Name: Stream.java 
	 * Description: 
	 * 
	 * @author Meilan Jiang
	 * @since 2016.05.20
	 * @version 1.2
	 * 
	 * Copyright(c) 2016 by CILAB All right reserved.
	 */
	
	private String DataSetID;
	private String DataSetName;
	private Site Site;
	private Source Source;
	private Variable Variable;
	private Method	Method;
	private Entity Entity;
	private String StartDate;
	private String EndDate;
	
	public String getDataSetID() {
		return DataSetID;
	}
	public void setDataSetID(String dataSetID) {
		DataSetID = dataSetID;
	}
	public String getDataSetName() {
		return DataSetName;
	}
	public void setDataSetName(String dataSetName) {
		DataSetName = dataSetName;
	}
	public Site getSite() {
		return Site;
	}
	public void setSite(Site site) {
		this.Site = site;
	}
	public Source getSource() {
		return Source;
	}
	public void setSource(Source source) {
		this.Source = source;
	}
	public Variable getVariable() {
		return Variable;
	}
	public void setVariable(Variable variable) {
		this.Variable = variable;
	}
	public Method getMethod() {
		return Method;
	}
	public void setMethod(Method method) {
		this.Method = method;
	}
	public Entity getEntity() {
		return Entity;
	}
	public void setEntity(Entity entity) {
		this.Entity = entity;
	}
	public String getStartDate() {
		return StartDate;
	}
	public void setStartDate(String startDate) {
		this.StartDate = startDate;
	}
	public String getEndDate() {
		return EndDate;
	}
	public void setEndDate(String endDate) {
		this.EndDate = endDate;
	}	
}
