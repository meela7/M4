package org.cilab.m4.service.impl;

import java.util.List;
import java.util.Map;

import org.cilab.m4.dao.SiteDAO;
import org.cilab.m4.model.Site;
import org.cilab.m4.service.SiteService;

public class SiteServiceImpl implements SiteService {

	/**
	 * Class Name:	SiteServiceImpl.java
	 * Description: 	
	 * 
	 * @author Meilan Jiang
	 * @since 2016.05.14
	 * @version 1.2
	 * 
	 * Copyright(c) 2016 by CILAB All right reserved.
	 */
	SiteDAO siteDao;
	
	public void setSiteDao(SiteDAO siteDao){
		this.siteDao = siteDao;
	}
	@Override
	public boolean newInstance(Site site) {
		return this.siteDao.create(site);
	}

	@Override
	public Site readInstance(int siteID) {
		return this.siteDao.read(siteID);
	}

	@Override
	public boolean updateInstance(Site site) {
		return this.siteDao.update(site);
	}

	@Override
	public boolean deleteInstance(int siteID) {
		return this.siteDao.delete(siteID);
	}

	@Override
	public List<Site> readCollection() {
		return this.siteDao.list();
	}

	@Override
	public boolean isInstanceExist(String name) {
		if(this.siteDao.getByUniqueKey(name) != null)
			return true;
		return false;
	}

	@Override
	public List<Site> search(Map<String, String> map) {
		return this.siteDao.search(map);
	}

	@Override
	public List<Site> listSearch(Map<String, List<String>> map) {
		return this.siteDao.listSearch(map);
	}

}
