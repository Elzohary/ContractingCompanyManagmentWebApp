export interface ChartModel {
    labels: string[],
    datasets: [{
        label: string,
        data: number[],
        backgroundColor: string[],
        hoverOffset?: number,
    }],
}
