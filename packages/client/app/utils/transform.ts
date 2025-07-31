// abstract class 단계
// 단계 객체는 원자적 변경을 나타냅니다. 일반적으로 생성된 문서에만 적용되며, 저장된 위치는 해당 문서에만 의미가 있습니다.
//
//     새로운 단계는 , , , 및 메서드를 Step재정의하고 . 를 사용하여 고유한 JSON 직렬화 식별자로 클래스를 등록하여 확장하는 클래스를 만들어 정의합니다 .applyinvertmapgetMapfromJSONStep.jsonID
//
// abstract apply(doc: Node) → StepResult
// 이 단계를 지정된 문서에 적용하여, 단계를 이 문서에 적용할 수 없는 경우 실패를 나타내는 결과 객체를 반환하고, 변환된 문서를 포함하여 성공을 나타냅니다.
//
// getMap() → StepMap
// 이 단계에서 변경된 내용을 나타내는 단계 맵을 가져와서 이전 문서와 새 문서에서 위치 간을 변환하는 데 사용할 수 있습니다.
//
//     abstract invert(doc: Node) → Step
// 이 단계의 반전된 버전을 만듭니다. 인수로 단계 이전 상태의 문서가 필요합니다.
//
//     abstract map(mapping: Mappable) → Step | null
// 매핑 가능한 항목을 통해 이 단계를 매핑하여 해당 단계의 위치가 조정된 버전을 반환하거나 null매핑으로 인해 단계가 완전히 삭제된 경우 해당 단계를 반환합니다.
//
// merge(other: Step) → Step | null
// 이 단계를 다른 단계와 병합하여 바로 뒤에 적용해 보세요. 가능한 경우 병합된 단계를 반환하고, 병합할 수 없는 경우 null을 반환합니다.
//
//     abstract toJSON() → any
// 이 단계의 JSON 직렬화 가능한 표현을 생성합니다. 사용자 지정 하위 클래스에 대해 이를 정의할 때, 결과 객체의 속성 아래에 단계 유형의 JSON ID가stepType 포함되어 있는지 확인하세요 .
//
//     static fromJSON(schema: Schema, json: any) → Step
// JSON 표현에서 단계를 역직렬화합니다. 이 메서드에 대한 단계 클래스 자체 구현을 호출합니다.
//
//     static jsonID(
//     id: string,
//     stepClass: {fromJSON: fn(schema: Schema, json: any) → Step}
// ) → {fromJSON: fn(schema: Schema, json: any) → Step}
// 단계를 JSON으로 직렬화하려면 각 단계에 JSON 표현에 연결할 문자열 ID가 필요합니다. 이 메서드를 사용하여 단계 클래스의 ID를 등록하세요. 다른 모듈의 단계와 충돌할 가능성이 낮은 ID를 선택하는 것이 좋습니다.