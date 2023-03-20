type JobBenefics = {label: string; content: string};
type Ubigeo = {country: string; state: string};
export interface InfoVideo {
  business: {
    name: string;
    plan: string;
    follow: boolean;
    image: string;
  };
  job: {
    ubigeo: Ubigeo;
    description: string;
    shortDescription: string;
    tipeJob: string;
    title: string;
    benefits: JobBenefics[];
  };
}
