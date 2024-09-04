import { getRandomColor } from './color'

export interface RandomName {
  name: string
  selected: boolean
  color: string
}

const selectedName: string[] = ['G09','G10','G11','G12','G13']
const selectedOther: string[] = ['Docker', 'Kubernetes', 'Jenkins', 'CircleCI', 'GitLab CI', 'Terraform', 'Ansible','NGINX', 'Apache','JavaScript','React.js', 'Vue.js', 'Angular', 'Svelte', 'Next.js', 'Nuxt.js','Python','PHP' ,'Laravel','Java','Spring Boot']

const randomizedSelectedName = selectedName.sort(() => Math.random() - 0.5)

export const nametest: RandomName[] = selectedOther.map(name => ({
  name,
  selected: false,
  color: getRandomColor(),
}))

export const names: RandomName[] = randomizedSelectedName.map(name => ({
  name,
  selected: true,
  color: getRandomColor(),
}))
names.push(
  ...nametest
)

export const selectedIndexes = names.filter(name => name.selected).map((_name, index) => index)
