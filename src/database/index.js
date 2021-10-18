import Projects from './projects'
import Files from './files'
import Software from './software'
import Config from './config'
import Website from './website'
import ProjectCategory from './projectCategory'
import FileCategory from './fileCategory'
import SoftwareCatogory from './softwareCategory'

export const projectData = new Projects()
export const fileData = new Files()
export const softwareData = new Software()

export const config = new Config()
export const websiteData = new Website()

export const projectCategory = new ProjectCategory()
export const fileCategory = new FileCategory()
export const softwareCategory = new SoftwareCatogory()
