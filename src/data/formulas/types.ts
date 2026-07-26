export interface Variable {
  symbol: string;
  name: string;
  unit: string;
}

export interface Formula {
  id: string;

  title: string;

  formula: string;

  plainFormula: string;

  description: string;

  variables: Variable[];

  keywords: string[];

  applications: string[];

  commonMistakes: string[];

  relatedFormulas: string[];

  notes: string[];
}